import { ErrorType, errorState, errorStore } from "./error-store"

export const setNewError = (errorType: ErrorType, message: string) => {
  errorStore.reset()

  errorState.errorType = errorType
  errorState.errorMessage = message
}