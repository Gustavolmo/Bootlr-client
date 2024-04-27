import { apiUrl } from '../../../http-definitions/endpoints';
import { productState } from '../myai-products-store/product-store';
import { Role } from '../myai-search-store/search-store';
import { chatState } from './chat-store';

type chatAiResponse = {
  responseText: string;
  productReference: string[];
};

export const processNewChatMessage = async (content: string): Promise<void> => {
  try {
    chatState.isLoading = true;
    addMessageToChat(content, Role.USER);

    const chatResponse: string = await getAiRespose();

    const parsedChatResponse: chatAiResponse = JSON.parse(chatResponse);
    const responseText = parsedChatResponse.responseText;
    const productReference = parsedChatResponse.productReference;

    addMessageToChat(responseText, Role.ASSISTANT);
    populateProductsInFocus(productReference);
  } catch (err) {
    console.error('Error while processing chat ->', err);
    alert(`
    This product is a prototype with limited resources.
    If you are seeing this, either Bootlr failed to answer correctly, or the chat history is too long and exceeds Bootlr's capacity.
    Try asking again or reloading the page. 
    `);
  } finally {
    chatState.isLoading = false;
  }
};

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
      content: '<span>Hello! How may I help you today?</span>',
    },
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

const getAiRespose = async () => {
  const URL = apiUrl.prod.bootlrChat;
  const requestBody = JSON.stringify(chatState.messages);
  const requestOptions: RequestInit = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: requestBody,
  };

  try {
    const response = await fetch(URL, requestOptions);
    const responseData = await response.json();
    const generatedQuery = responseData;
    return generatedQuery;
  } catch (error) {
    console.error('getAiRespose Error:', error);
  }
};

const populateProductsInFocus = (productReferece: string[]) => {
  productState.productsInFocus.length = 0;

  productState.shoppingResults.forEach(product => {
    productReferece.forEach(productTitle => {
      if (product.title.includes(productTitle)) {
        productState.productsInFocus = [...productState.productsInFocus, product];
      }
    });
  });
};
