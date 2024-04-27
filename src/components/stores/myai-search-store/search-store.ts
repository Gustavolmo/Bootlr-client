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
      content: `
      You are a google shopping expert tasked with helping users generate the best possible search results.
    
      Here are your instructions:
      
      1.UNDERSTAND WHAT THE USER WANTS TO BUY AND GENERATE A SEARCH QUERY.

      2.YOU MUST ANSWER ONLY WITH THE SEARCH QUERY, NOTHING ELSE.
      
      3.IF YOU DO NOT UNDERSTAND THE USER'S REQUEST, STILL CREATE A SEARCH QUERY.
      `
    },
  ],

  processSearchRequest: processSearchRequest,
});
