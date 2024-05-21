import { createStore } from '@stencil/store';
import { addMessageToSearch, processSearchRequest } from './search-helper';

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
  addMessageToSearch: (content: string, role: Role) => void
}

export type Messages = {
  role: Role;
  content: string;
};

export const searchStore = createStore<searchStore>({
  isFirstSearch: true, //default is true
  isLoading: false, //default is false
  messages: [
    {
      role: Role.SYSTEM,
      content: `
      You are an expert in generating search queries for Google Shopping.
      Your task is to understand what the user is looking for and create a search query.

      Here are your instructions:
      1. THE SEARCHES ARE MADE IN THE SWEDEN MARKET, WRITE THE SEARCH QUERY IN SWEDISH.
      2. WRITE A SEARCH QUERY THAT REFLECTS THE USER INTENTION.
      3. YOU MUST ANSWER ONLY WITH THE SEARCH QUERY, NOTHING ELSE!
      4. IF YOU DO NOT UNDERSTAND THE USER'S REQUEST, STILL CREATE A SEARCH QUERY.
      `,
    },
  ],

  processSearchRequest: processSearchRequest,
  addMessageToSearch: addMessageToSearch,
});

export const { state: searchState } = searchStore;
