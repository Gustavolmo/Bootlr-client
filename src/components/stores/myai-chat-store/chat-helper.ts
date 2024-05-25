import { mockChatResponse } from '../../../../dev-mocks/search-results-mock';
import { apiUrl } from '../../../http-definitions/endpoints';
import { ErrorType, errorState, errorStore } from '../myai-error-store/error-store';
import { Product, productState } from '../myai-products-store/product-store';
import { Role, searchState } from '../myai-search-store/search-store';
import { chatState } from './chat-store';

export type chatAiResponse = {
  responseText: string;
  productReference: string[];
};

export const processNewChatMessage = async (userMessage: string): Promise<void> => {
  if (searchState.isLoading) return;
  if (chatState.isLoading) return;

  const isTestingEnv = window.location.href === 'http://testing.stenciljs.com/' // TODO: Remove this testing mock by implementing MSW

  chatState.isLoading = true;
  try {
    errorStore.reset();

    addMessageToChat(userMessage, Role.USER);
    const chatResponse = isTestingEnv
        ? mockChatResponse
        : await getAiRespose();
    addMessageToChat(chatResponse, Role.ASSISTANT);

  } catch (err) {
    errorState.setNewError(ErrorType.CHAT, 'Something went wrong, please try again.');
    console.error('Error while processing chat ->', err);
  
  } finally {
    chatState.isLoading = false;
  }
};

export const addSearchContext = (userSearch: string) => {
  const shoppingResultSummary = productState.shoppingResults.map(product => {

    let reducedDescription: string;
    if (product.product_description) {
      reducedDescription = product.product_description.substring(0, 300)
    }

    return {
      product_attributes: product.product_attributes,
      product_description: reducedDescription,
      product_rating: product.product_rating,
      product_title: product.product_title,
      offer: {
        offer_page_url: product.offer.offer_page_url,
        on_sale: product.offer.on_sale,
        price: product.offer.price,
        product_condition: product.offer.product_condition,
        shipping: product.offer.shipping,
        store_name: product.offer.store_name,
      },
    } as Product;
  });

  chatState.messages = [
    ...chatState.messages,
    {
      role: Role.SYSTEM,
      content: `
      The user made the following search request "${userSearch}"
      and is now presented with these product results:
      ${JSON.stringify(shoppingResultSummary)}
      `,
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
  const URL = apiUrl().bootlrChat;

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
    return responseData;

  } catch (error) {
    console.error('getAiRespose Error:', error);
  }
};
