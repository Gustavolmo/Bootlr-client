import { createStore } from '@stencil/store';
import { Role } from '../myai-search-store/search-store';

export interface ChatStore {
  isLoading: boolean;
  isChatOpen: boolean;
  isChatEnabled: boolean;
  messages: Messages[];
  enableChat: () => void;
}

export type Messages = {
  role: Role;
  content: string;
};

export const { state: chatState } = createStore<ChatStore>({
  isLoading: false,
  isChatOpen: false,
  isChatEnabled: false,
  messages: [
    {
      role: Role.SYSTEM,
      content:
        'You are a personal online shopping assistant, your ONLY TASK is to give ADVICE and RECOMMENDATION on products by any means necessary. For example, you may access the link in order to retrieve information for the user.',
    },
  ],

  enableChat: () => {
    chatState.isChatEnabled = true;
    chatState.isChatOpen = true;
  },

  //sendMessageToAi: () => {};
});
