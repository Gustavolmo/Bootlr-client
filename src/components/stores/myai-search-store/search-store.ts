import { createStore } from '@stencil/store';
import { processSearchRequest } from './search-helper';

export enum Role {
  USER = 'user',
  SYSTEM = 'system',
  ASSISTANT = 'assistant',
}

export interface searchStore {
  isLoading: boolean;
  isFirstSearch: boolean;
  messages: Messages[];
  processSearchRequest: (userSearch: string) => Promise<void>;
}

export type Messages = {
  role: Role;
  content: string;
};

export const searchStore = createStore<searchStore>({
  isFirstSearch: true,
  isLoading: false,
  messages: [
    {
      role: Role.SYSTEM,
      content: `
      You are an expert in generating search keywords for product searches in Amazon and Google shopping,
      you are tasked with transforming the user message into accurate keywords to best represent the user intention.

      Here are your instructions:

      1. THE SEARCHES ARE MADE IN SWEDEN, MIX SWEDISH AND ENGLISH KEYWORDS.
      
      2. UNDERSTAND WHAT THE USER WANTS TO BUY AND GENERATE ACCURATE SEARCH KEYWORDS.

      3. YOU MUST ANSWER ONLY WITH SEARCH KEYWORDS, NOTHING ELSE.

      4. IF YOU DO NOT UNDERSTAND THE USER'S REQUEST, STILL CREATE SEARCH KEYWORDS.
      `
    },
  ],

  processSearchRequest: processSearchRequest,
});

export const { state: searchState } = searchStore;