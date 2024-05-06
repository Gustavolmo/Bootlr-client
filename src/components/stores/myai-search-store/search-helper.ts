import { mockPromptToSearch } from '../../../../dev-mocks/search-results-mock';
import { apiUrl } from '../../../http-definitions/endpoints';
import { chatState, chatStore } from '../myai-chat-store/chat-store';
import { ErrorType, errorState, errorStore } from '../myai-error-store/error-store';
import { productState, productStore } from '../myai-products-store/product-store';
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
    errorStore.reset();
    searchState.isFirstSearch = false;

    const response =
      window.location.href === 'https://bootlr.com/'
        ? await translatePromptToSearch()
        : await mockPromptToSearch(window);

    addMessageToSearch(userMessage, Role.USER);
    addMessageToSearch(response.searchQuery, Role.ASSISTANT);

    chatState.enableChat();
    productState.shoppingResults = response.shoppingResults;
    chatState.addShoppingContextToChat(userMessage);
  } catch (err) {
    errorState.setNewError(ErrorType.SEARCH, 'It seems there was an error, please try again.');
    console.error('Error while processing searchrequest ->', err);
  } finally {
    searchState.isLoading = false;
  }
};

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
  const URL = apiUrl.prod.bootlrSearch;
  //const URL = apiUrl.local.bootlrSearch;
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
    return responseData;
  } catch (error) {
    console.error('translatePromptToSearch Error:', error);
  }
};
