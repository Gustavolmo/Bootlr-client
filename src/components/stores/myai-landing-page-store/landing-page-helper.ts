import { mockTrendingProducts } from '../../../../dev-mocks/sponsored-products-mock';
import { addShoppingContextToChat } from '../myai-chat-store/chat-helper';
import { chatState, chatStore } from '../myai-chat-store/chat-store';
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

    addShoppingContextToChat('Show me the currently trending products');
    chatState.enableChat();

  } catch (err) {
    console.error('Error while processing searchrequest ->', err);
  
  } finally {
    searchState.isLoading = false;
  }
};
