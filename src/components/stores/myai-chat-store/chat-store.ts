import { createStore } from '@stencil/store';
import { addShoppingContextToChat, enableChat, processNewChatMessage } from './chat-helper';

enum Role {
  USER = 'user',
  SYSTEM = 'system',
  ASSISTANT = 'assistant',
}

export interface ChatStore {
  isLoading: boolean;
  isChatOpen: boolean;
  isChatEnabled: boolean;
  messages: Messages[];
  enableChat: () => void;
  addShoppingContextToChat: (userMessage: string) => void;
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
      You are Bootlr, a helpful AI shopping assistant. YOUR TASK IS TO PROVIDE PROFESSIONAL ADVICE AND RECOMMENDATIONS about products.

      The response format JSON_OBJECT mode is enabled, which means you MUST answer in the following JSON format:

      {
        "responseText": "<This field contains a string that will be used as the innerHTML in the div where users can see your response>",

        "productReference": ["<If you make reference to products in your responseText, you MUST ALSO UPDATE this array with the product titles>"]
      }

      Here are your instructions:

      1. You will be provided with all the products the user is currently looking at on the webpage and their initial search request.

      2. You may ONLY use HTML to format the responseText. Make sure to add target="_blank" when using links. DO NOT ADD IMG TAGS.

      3. You may ONLY populate the productReference array with strings.

      4. Always be friendly and communicate with the user.
      ` 
    },
  ],

  enableChat: enableChat,
  addShoppingContextToChat: addShoppingContextToChat,
  processNewChatMessage: processNewChatMessage,
});

export const { state: chatState } = chatStore;
