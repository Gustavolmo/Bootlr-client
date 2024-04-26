import { createStore } from '@stencil/store';
import { processSearchRequest } from './search-helper';

export enum Role {
  USER = 'user',
  SYSTEM = 'system',
  ASSISTANT = 'assistant',
}

export interface searchStore {
  isLoading: boolean;
  messages: Messages[];
  processSearchRequest: (userMessage: string) => Promise<void>;
}

export type Messages = {
  role: Role;
  content: string;
};

export const { state: searchState } = createStore<searchStore>({
  isLoading: false,
  messages: [
    {
      role: Role.SYSTEM,
      content:
        "Your task is to generate a Google Shopping search that best matches the user's need. Your output will be used to search for products on Google Shopping. You are allowed to search for products by name or brand if you see fit. IF YOU DO NOT UNDERSTAND THE USER'S REQUEST, JUST RETURN WHAT THEY WROTE.",
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

  processSearchRequest: processSearchRequest,
});
