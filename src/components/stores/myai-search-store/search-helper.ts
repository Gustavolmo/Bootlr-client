import { mockSearchResults } from '../../../../dev-mocks/search-results-mock';
import { chatState, chatStore } from '../myai-chat-store/chat-store';
import { productStore } from '../myai-products-store/product-store';
import { Role, searchState } from './search-store';

export interface TranslatePromptResponse {
  searchQuery: string;
  shoppingResults: Object[];
}

export const processSearchRequest = async (userMessage: string): Promise<void> => {
  searchState.isLoading = true;
  try {
    chatStore.reset();
    productStore.reset();
    /* addMessageToSearch(userMessage, Role.USER);
    const response = await translatePromptToSearch();
    addMessageToSearch(response.searchQuery, Role.ASSISTANT);
    productState.shoppingResults = response.shoppingResults */
    
    await mockSearchResults();

    chatState.addShoppingContextToChat();

  } catch (err) {
    console.error('Error while processing searchrequest ->', err);
  } finally {
    searchState.isLoading = false;
    console.log('SEARCH LOGS', searchState.messages);
  }
}

const addMessageToSearch = (content: string, role: Role) => {
  searchState.messages = [
    ...searchState.messages,
    {
      role: role,
      content: content,
    },
  ];
};

const translatePromptToSearch = async (): Promise<TranslatePromptResponse> => {
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
