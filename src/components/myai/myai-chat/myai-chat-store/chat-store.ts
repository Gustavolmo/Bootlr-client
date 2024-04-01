import { createStore } from "@stencil/store";

interface ChatStore {
  promptHistory: string[]
}

const { state, onChange } = createStore<ChatStore>({
  promptHistory: []
});

export const pushPromptToHistory = (prompt: string) => {
  state.promptHistory.push(prompt)
}

export const translatePromptToSearch = () => {
  // OPEN AI STUFF
}

export {state as chatStore}