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
      You will be provided with a user request. YOUR TASK is to generate a Google Shopping search text.
      
      Here are your instructions:

      1.CREATE A GOOGLE SHOPPING SEARCH TERM THAT WILL HELP THE USER FIND WHAT PRODUCT THEY ARE LOOKING FOR.

      2.YOU MUST ANSWER ONLY WITH THE SHOPPING SEARCH TERM, NOTHING ELSE.
      
      3.IF YOU DO NOT UNDERSTAND THE USER'S REQUEST, STILL CREATE A SEARCH TEXT.
      `
    },
  ],

  processSearchRequest: processSearchRequest,
});
