import { mockChatResponse } from '../../../../dev-mocks/search-results-mock';
import { apiUrl } from '../../../http-definitions/endpoints';
import { ErrorType, errorState, errorStore } from '../myai-error-store/error-store';
import { Product, productState } from '../myai-products-store/product-store';
import { Role, searchState } from '../myai-search-store/search-store';
import { chatState } from './chat-store';

type chatAiResponse = {
  responseText: string;
  productReference: string[];
};

export const processNewChatMessage = async (userMessage: string): Promise<void> => {
  if (searchState.isLoading) return;

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

    productState.populateProductsInFocus(productReference);
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

export const addSearchContext = (userSearch: string) => {
  const shoppingResultSummary = productState.shoppingResults.map(product => {
    return {
      product_attributes: product.product_attributes,
      product_description: product.product_description,
      product_rating: product.product_rating,
      product_title: product.product_title,
      typical_price_range: product.typical_price_range,
      offer: {
        offer_page_url: product.offer.offer_page_url,
        on_sale: product.offer.on_sale,
        original_price: product.offer.original_price,
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
      and is now presented with these products:
      ${JSON.stringify(shoppingResultSummary)}`,
    },
    {
      role: Role.ASSISTANT,
      content: '<span>Hi, how may I help you today?</span>',
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
  const URL = apiUrl('local').bootlrChat;

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
