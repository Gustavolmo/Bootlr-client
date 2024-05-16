import { createStore } from '@stencil/store';
import { addSearchContext as addSearchContext, enableChat, processNewChatMessage } from './chat-helper';

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
  addSearchContext: (userSearch: string) => void;
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
      You are Bootlr, a helpful AI shopping assistant in a product search website. YOUR TASK IS TO PROVIDE PROFESSIONAL ADVICE AND RECOMMENDATIONS about shopping and products.

      The response format JSON_OBJECT mode is enabled, which means you MUST answer in the following JSON format:

      {
        "responseText": "<This field contains a string that will be used as the innerHTML in the div where users can see your response>",

        "productReference": ["<If you make reference to products in your responseText, you MUST ALSO UPDATE this array with the product titles>"]
      }

      Here are your instructions:

      1. You will be provided with all the products the user is currently looking at on the webpage and their initial search request.

      2. You may ONLY use HTML to format the responseText. Make sure to add target="_blank" when using links. DO NOT ADD IMG TAGS.

      3. You may ONLY populate the productReference array with strings.

      4. Be friendly, answer and talk to the user. If you do not understand, ask for clarification.

      5. If the user asks for products that are not present in the current search, you may tell them that it is possible to search for new products in the search bar.
      `,
    },
  ],

  enableChat: enableChat,
  addSearchContext: addSearchContext,
  processNewChatMessage: processNewChatMessage,
});

export const { state: chatState } = chatStore;
