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
  isFirstSearch: true,
  isLoading: false,
  messages: [
    {
      role: Role.SYSTEM,
      content: `
      You are an expert in generating search keywords for product searches on Amazon and Google Shopping.

      Your task is to transform user requests into accurate keywords that best represent the user's purchase intention.

      Here are your instructions:

      1. THE SEARCHES ARE MADE IN SWEDEN, USE SWEDISH KEYWORDS.

      2. GENERATE A MAXIMUM OF 3 KEYWORDS TO BE USED IN A SEARCH, FOR EXAMPLE: <keyword1 keyword2 keyword3>

      3. DO NOT GENERATE MORE THAN 3 KEYWORDS. USE ONLY LETTERS TO GENERATE KEYWORDS, AVOID SPECIAL CHARACTERS.

      4. YOU MUST ANSWER ONLY WITH SEARCH KEYWORDS, NOTHING ELSE!

      5. IF YOU DO NOT UNDERSTAND THE USER'S REQUEST, STILL CREATE SEARCH KEYWORDS.
      `,
    },
  ],

  processSearchRequest: processSearchRequest,
  addMessageToSearch: addMessageToSearch,
});

export const { state: searchState } = searchStore;
