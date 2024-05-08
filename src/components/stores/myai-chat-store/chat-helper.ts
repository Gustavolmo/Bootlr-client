import { mockChatResponse } from '../../../../dev-mocks/search-results-mock';
import { apiUrl } from '../../../http-definitions/endpoints';
import { ErrorType, errorState, errorStore } from '../myai-error-store/error-store';
import { productState } from '../myai-products-store/product-store';
import { Role } from '../myai-search-store/search-store';
import { chatState } from './chat-store';

type chatAiResponse = {
  responseText: string;
  productReference: string[];
};

export const processNewChatMessage = async (userMessage: string): Promise<void> => {
  chatState.isLoading = true;
  try {
    errorStore.reset();

    addMessageToChat(userMessage, Role.USER);
    const chatResponse =
      window.location.href === 'http://testing.stenciljs.com/'
        ? mockChatResponse
        : await getAiRespose();

    const parsedChatResponse: chatAiResponse = JSON.parse(chatResponse);
    const responseText = parsedChatResponse.responseText;
    const productReference = parsedChatResponse.productReference;
    addMessageToChat(responseText, Role.ASSISTANT);

    populateProductsInFocus(productReference);
  } catch (err) {
    errorState.setNewError(ErrorType.CHAT, 'Something went wrong, please try again.');
    console.error('Error while processing chat ->', err);
  } finally {
    chatState.isLoading = false;
  }
};

export const enableChat = () => {
  if (window.innerWidth > 740) chatState.isChatOpen = true;
};

export const addShoppingContextToChat = (userMessage: string) => {
  const shoppingResultSummary = productState.shoppingResults.map(product => {
    return {
      link: product.link,
      source: product.source,
      title: product.title,
      rating: product.rating,
      price: product.price,
      delivery: product.delivery,
      extensions: product.extensions,
    };
  });

  chatState.messages = [
    ...chatState.messages,
    {
      role: Role.SYSTEM,
      content: `
      The user made the following search request "${userMessage}"
      and is now presented with the these products:
      ${JSON.stringify(shoppingResultSummary)}`,
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
  //const URL = apiUrl.local.bootlrChat;
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

const populateProductsInFocus = (productReference: string[]) => {
  if (!productReference) return;

  productState.productsInFocus.length = 0;
  
  const matchedProducts = productState.shoppingResults.filter(product => {
    return productReference.some(reference => product.title.includes(reference));
  });

  const uniqueProducts = matchedProducts.filter((match, index, self) => {
    return self.findIndex(obj => obj.position === match.position) === index;
  });

  productState.productsInFocus = uniqueProducts;
};
