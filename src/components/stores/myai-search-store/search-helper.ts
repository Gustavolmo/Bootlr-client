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

export const processSearchRequest = async (userSearch: string): Promise<void> => {
  if (searchState.isLoading) return;
  if (chatState.isLoading) return;

  const isLocalEnv =
    window.location.href === 'http://testing.stenciljs.com/' ||
    window.location.href === 'http://localhost:3333/' ||
    userSearch === 'super-secret-search-for-testing';

  searchState.isLoading = true;
  searchState.isFirstSearch = false;
  try {
    errorStore.reset();
    chatStore.reset();
    productStore.reset();

    addMessageToSearch(userSearch, Role.USER);
    /* const response = await translatePromptToSearch(); */
    const response = isLocalEnv
      ? await mockPromptToSearch(window)
      : await translatePromptToSearch();
    addMessageToSearch(response.searchQuery, Role.ASSISTANT);

    chatState.enableChat();
    productState.shoppingResults = response.shoppingResults;
    chatState.addSearchContext(userSearch);
  } catch (err) {
    errorState.setNewError(ErrorType.SEARCH, 'Bootlr made a mistake, please try again.');
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
  const URL = apiUrl().bootlrSearch;
  
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
