import { mockPromptToSearch } from '../../../../dev-mocks/search-results-mock';
import { apiUrl } from '../../../http-definitions/endpoints';
import { chatState, chatStore } from '../myai-chat-store/chat-store';
import { ErrorType, errorState } from '../myai-error-store/error-store';
import { productState } from '../myai-products-store/product-store';
import { TranslatePromptResponse } from '../myai-search-store/search-helper';
import { Role, searchState } from '../myai-search-store/search-store';
import { landingPageState } from './landing-page-store';

export const processTrendingItems = async () => {
  searchState.isLoading = true;
  landingPageState.isFirstLoad = false;
  let searchContext = 'Now make a search on any category, you decide'

  const isLocalEnv =
  window.location.href === 'http://testing.stenciljs.com/' ||
  window.location.href === 'http://localhost:3333/'

  try {
    chatStore.reset();
    
    searchState.addMessageToSearch(searchContext, Role.USER)
    /* const trendingProducts = await translatePromptToSearch(); */
    const trendingProducts = isLocalEnv
      ? await mockPromptToSearch(window)
      : await translatePromptToSearch();
    searchState.addMessageToSearch(trendingProducts.searchQuery, Role.SYSTEM)

    if (trendingProducts.shoppingResults.length === 0) {
      productState.isResultEmpty = true;
      searchContext += ', but sadly there were no results found'
    }

    productState.shoppingResults = trendingProducts.shoppingResults;
    chatState.addSearchContext(searchContext);
    chatState.enableChat();

  } catch (err) {
    errorState.setNewError(ErrorType.SEARCH, 'Failed to find deals, please relaod.');
    console.error('Error while processing searchrequest ->', err);
  
  } finally {
    searchState.isLoading = false;
  }
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
