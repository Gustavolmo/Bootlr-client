import { mockTrendingProducts } from '../../../../dev-mocks/sponsored-products-mock';
import { addShoppingContextToChat } from '../myai-chat-store/chat-helper';
import { chatState } from '../myai-chat-store/chat-store';
import { ErrorType, errorState } from '../myai-error-store/error-store';
import { productState } from '../myai-products-store/product-store';
import { searchState } from '../myai-search-store/search-store';
import { landingPageState } from './landing-page-store';

export const processTrendingItems = async () => {
  searchState.isLoading = true;
  try {
    landingPageState.isFirstLoad = false;
    const trendingProducts = await mockTrendingProducts(window); //This will become the real api call once amazon is fixed

    productState.shoppingResults = trendingProducts;

    addShoppingContextToChat('Show me the currently trending products');
    chatState.enableChat();

  } catch (err) {
    errorState.setNewError(
      ErrorType.SEARCH,
      'Ops, something is not right, please reload the page.',
    );
    console.error('Error while processing searchrequest ->', err);
  
  } finally {
    searchState.isLoading = false;
  }
};
