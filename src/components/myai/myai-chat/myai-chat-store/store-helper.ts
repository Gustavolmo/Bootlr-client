import { chatState } from "./chat-store";

export enum Role {
  USER = 'user',
  SYSTEM = 'system',
  ASSISTANT = 'assistant',
}

export interface TranslatePromptResponse {
  searchQuery: string
  shoppingResults: Object[]
}

export const pushMessageToHistory = (message: string, role: Role) => {
  chatState.messages.push({
    role: role,
    content: message,
  });
};

export const translatePromptToSearch = async (): Promise<TranslatePromptResponse> => {
  const URL = 'http://localhost:8080/post-search-request';
  const requestBody = JSON.stringify(chatState.messages);
  const requestOptions: RequestInit = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: requestBody,
  };

  try {
    const response = await fetch(URL, requestOptions);
    const responseData = await response.json();
    const generatedQuery = responseData
    return generatedQuery;

  } catch (error) {
    console.error('translatePromptToSearch Error:', error);
  }
};
