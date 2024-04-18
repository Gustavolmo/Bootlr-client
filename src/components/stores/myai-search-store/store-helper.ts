import { chatState } from '../myai-chat-store/chat-store';
import { productState } from '../myai-products-store/product-store';
import { Role, searchState } from './search-store';

export interface TranslatePromptResponse {
  searchQuery: string;
  shoppingResults: Object[];
}

export const pushMessageToHistory = (message: string, role: Role) => {
  searchState.messages.push({
    role: role,
    content: message,
  });
};

export const addShoppingSummaryToChatSystem = () => {
  const shoppingResultSummary = productState.shoppingResults.map(product => {
    return {
      positionInPage: product.position,
      pructPageLink: product.link,
      seller: product.source,
      productTitle: product.title,
    };
  });

  console.log(shoppingResultSummary);

  chatState.messages.push({
    role: Role.SYSTEM,
    content: `At the moment, the user is looking at the following options: ${JSON.stringify(
      shoppingResultSummary,
    )}`,
  });
};

export const translatePromptToSearch = async (): Promise<TranslatePromptResponse> => {
  const URL = 'http://localhost:8080/post-search-request';
  const requestBody = JSON.stringify(searchState.messages);
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
    console.error('translatePromptToSearch Error:', error);
  }
};
