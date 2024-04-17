import { createStore } from '@stencil/store';
import { Role/* , pushMessageToHistory, translatePromptToSearch */ } from './store-helper';
/* import { productState } from '../../myai-products/myai-products-store/product-store'; */
import { mockSearchResults } from '../../../dev-mocks/search-results-mock';

export interface ChatStore {
  isLoading: boolean;
  messages: Messages[];
  processSearchRequest: (userMessage: string) => Promise<void>;
}

export type Messages = {
  role: Role;
  content: string;
};

export const { state: chatState } = createStore<ChatStore>({
  isLoading: false,
  messages: [
    {
      role: Role.SYSTEM,
      content:
        "Your task is to generate a Google Shopping search that best matches the user's need. Your output will be used to search for products on Google Shopping. You are allowed to search for products by name or brand if you see fit. IF YOU DO NOT UNDERSTAND THE USER'S REQUEST, STILL CREATE A GOOGLE SHOPPING SEARCH.",
    },
    {
      role: Role.SYSTEM,
      content:
        'Feel free to utilize any relevant information provided by the user to refine your search, such as product category, price range, or any specific preferences mentioned.',
    },
    {
      role: Role.SYSTEM,
      content: 'YOU MAY ONLY ANSWER WITH THE SEARCH TEXT. NOTHING ELSE.',
    },
  ],

  processSearchRequest: async (userMessage: string): Promise<void> => {
    chatState.isLoading = true;
    try {
      console.log(userMessage)
      /* pushMessageToHistory(userMessage, Role.USER);
      const response = await translatePromptToSearch();
      pushMessageToHistory(response.searchQuery, Role.ASSISTANT);
      productState.shoppingResults = response.shoppingResults */
      await mockSearchResults();
    } catch (err) {
      console.error('Error while processing searchrequest ->', err);
    } finally {
      chatState.isLoading = false;
    }
  },
});
