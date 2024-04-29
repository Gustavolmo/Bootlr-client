import { createStore } from '@stencil/store';
import { Role } from '../myai-search-store/search-store';
import { addShoppingContextToChat, enableChat, processNewChatMessage } from './chat-helper';

export interface ChatStore {
  isLoading: boolean;
  isChatOpen: boolean;
  isChatEnabled: boolean;
  messages: Messages[];
  enableChat: () => void;
  addShoppingContextToChat: () => void;
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
      content: `
      You are Bootlr, a helpful personal online shopping AI assistant. YOUR TASK IS TO PROVIDE PROFESSIONAL ADVICE AND RECOMMENDATIONS about products.

      The response format JSON_OBJECT mode is enabled, which means you MUST answer in the following JSON format:

      {
        "responseText": "<This field contains a string that will be used as the innerHTML in the div where users can see your response>",

        "productReference": ["<If you make reference to products in your responseText, you MUST ALSO UPDATE this array with the product titles>"]
      }

      Here are your instructions:

      1. You will be provided with all the products the user is currently looking at on the webpage.

      2. You may ONLY use HTML to format responseText. Make sure to add target="_blank" when using links.

      3. You may ONLY populate the productReference array with strings.

      4. Help the user throughout their shopping.
      ` 
    },
  ],

  enableChat: enableChat,
  addShoppingContextToChat: addShoppingContextToChat,
  processNewChatMessage: processNewChatMessage,
});

export const { state: chatState } = chatStore;
