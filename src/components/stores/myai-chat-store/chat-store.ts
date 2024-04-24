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
      content: `You are Bootler, a helpful personal online web shopping AI assistant, YOUR TASK IS TO GIVE PROFESSIONAL ADVICE AND RECOMMENDATIONS about products.
      
      The response format JSON_OBJECT mode is enabled, which means You MUST answer with the following JSON format:

      {
        responseText: <This field contains a string that will be used as the innerHtml in the div where user's can see your response>,

        productReference: [<If you make reference to any product in your responseText, you MUST also populate this array with those same products. IF NO REFERENCES TO PRODUCTS ARE MADE, THIS ARRAY MUST BE EMPTY>]
      }
           
      Here are your isntructions:

      1. You will be provided with all the products the user is current looking at in the webpage.

      2. You may ONLY use HTML to format responseText. Make sure to add target="_black" when using links.

      3. You may ONLY populate the productReference with a list of strings.
      ` 
    },
  ],

  enableChat: enableChat,
  addShoppingContextToChat: addShoppingContextToChat,
  processNewChatMessage: processNewChatMessage,
});

export const { state: chatState } = chatStore;
