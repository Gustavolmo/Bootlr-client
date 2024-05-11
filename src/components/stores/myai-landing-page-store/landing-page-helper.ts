import { mockTrendingProducts } from '../../../../dev-mocks/sponsored-products-mock';
import { chatState, chatStore } from '../myai-chat-store/chat-store';
import { ErrorType, errorState } from '../myai-error-store/error-store';
import { productState } from '../myai-products-store/product-store';
import { searchState } from '../myai-search-store/search-store';
import { landingPageState } from './landing-page-store';

export const processTrendingItems = async () => {
  searchState.isLoading = true;
  try {
    chatStore.reset();
    landingPageState.isFirstLoad = false;
    
    const trendingProducts = await mockTrendingProducts(window); // TODO: Make api endpoint for getting trendy products 

    productState.shoppingResults = trendingProducts;

    chatState.addSearchContext('Popular products in discount');
    chatState.enableChat();

  } catch (err) {
    errorState.setNewError(ErrorType.SEARCH, 'Failed to find deals, please relaod.');
    console.error('Error while processing searchrequest ->', err);
  
  } finally {
    searchState.isLoading = false;
  }
};
