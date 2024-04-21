import { createStore } from '@stencil/store';
import { Role } from '../myai-search-store/search-store';
import { addMessageToChat, enableChat, getAiRespose } from './chat-helper';

export interface ChatStore {
  isLoading: boolean;
  isChatOpen: boolean;
  isChatEnabled: boolean;
  messages: Messages[];
  enableChat: () => void;
  processNewChatMessage: (content: string) => Promise<void>;
}

export type Messages = {
  role: Role;
  content: string;
};

export const chatStore = createStore<ChatStore>({
  isLoading: false,
  isChatOpen: false,
  isChatEnabled: false,
  messages: [
    {
      role: Role.SYSTEM,
      content: `You are Bootler, a personal online web shopping AI assistant, YOUR TASK IS TO GIVE PROFESSIONAL ADVICE AND RECOMMENDATIONS about products.
      
      You will be provided with all the products the user is current looking at in the webpage.

      You may ONLY use HTML to format text. Make sure to add target="_black" when using links
      `,
    },
  ],

  enableChat: enableChat,

  processNewChatMessage: async (content: string): Promise<void> => {
    try {
      chatState.isLoading = true;
      addMessageToChat(content, Role.USER);

      const chatResponse: string = await getAiRespose();
      const parsedChatResponse =
        chatResponse.length > 0 ? chatResponse : 'Ops, something went wrong, please try again.';

      addMessageToChat(parsedChatResponse, Role.ASSISTANT);
    } catch (err) {
      addMessageToChat('Something when wrong', Role.ASSISTANT);
    } finally {
      console.log(chatState.messages);
      chatState.isLoading = false;
    }
  },
});

export const { state: chatState } = chatStore;
