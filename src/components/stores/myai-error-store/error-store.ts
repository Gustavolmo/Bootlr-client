import { createStore } from "@stencil/store";
import { setNewError } from "./error-helper";

export enum ErrorType {
  CHAT = 'chat',
  SEARCH = 'search',
  NONE = 'none'
}

interface ErrorStore {
  errorType: ErrorType
  errorMessage: string,
  setNewError: (errorType: ErrorType, message: string) => void;
}

export const errorStore = createStore<ErrorStore>({
  errorType: ErrorType.NONE,
  errorMessage: '',
  setNewError: setNewError
})

export const { state: errorState } = errorStore;