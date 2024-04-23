import { productState } from "../myai-products-store/product-store";
import { Role } from "../myai-search-store/search-store";
import { chatState } from "./chat-store";

export const processNewChatMessage = async (content: string): Promise<void> => {
  try {
    chatState.isLoading = true;
    addMessageToChat(content, Role.USER);

    const chatResponse: string = await getAiRespose();
    const parsedChatResponse =
      chatResponse.length > 0 ? chatResponse : 'Ops, something went wrong, please try again.';

    addMessageToChat(parsedChatResponse, Role.ASSISTANT);
  } catch (err) {
    addMessageToChat('Something when wrong', Role.ASSISTANT);
  } finally {
    console.log(chatState.messages);
    chatState.isLoading = false;
  }
}

export const enableChat = () => {
  chatState.isChatEnabled = true;
  chatState.isChatOpen = true;
};

export const addShoppingContextToChat = () => {
  const shoppingResultSummary = productState.shoppingResults.map(product => {
    return {
      link: product.link,
      source: product.source,
      title: product.title,
      rating: product.rating,
      price: product.price,
    };
  });

  chatState.messages = [
    ...chatState.messages,
    {
      role: Role.SYSTEM,
      content: `The user is looking at the following options: ${JSON.stringify(
        shoppingResultSummary,
      )}`,
    },
    {
      role: Role.ASSISTANT,
      content: "<span>Let me know if I can help you!</span>"
    }
  ];
};

const addMessageToChat = (content: string, role: Role) => {
  chatState.messages = [
    ...chatState.messages,
    {
      role: role,
      content: content,
    },
  ];
};


// MOVE TO BACK END ONCE DONE TESTING
export const getAiRespose = async () => {
  const OPENAI_APIKEY = "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"
  const URL = "https://api.openai.com/v1/chat/completions"
  const REQUEST_BODY = chatState.messages

  try {
    const response = await fetch(URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + OPENAI_APIKEY,
      },
      body: JSON.stringify({
        messages: REQUEST_BODY,
        model: "gpt-3.5-turbo",
        temperature: 0.7
      }),
    });

    const chatResponse = await response.json();
    return chatResponse.choices[0].message.content
  } catch (error) {
    console.error("Error:", error);
  }
}