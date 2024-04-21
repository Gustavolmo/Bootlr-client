import { productState } from "../myai-products-store/product-store";
import { Role } from "../myai-search-store/search-store";
import { chatState } from "./chat-store";

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

export const addMessageToChat = (content: string, role: Role) => {
  chatState.messages = [
    ...chatState.messages,
    {
      role: role,
      content: content,
    },
  ];
};

export const enableChat = () => {
  chatState.isChatEnabled = true;
  chatState.isChatOpen = true;
};

// MOVE TO BACK END ONCE IT WORKS
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