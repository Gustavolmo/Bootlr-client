import { searchState } from '../../components/stores/myai-search-store/search-store';
import { productState } from '../../components/stores/myai-products-store/product-store';
import { chatState } from '../../components/stores/myai-chat-store/chat-store';
import { ErrorType, errorState } from '../../components/stores/myai-error-store/error-store';

describe('SEARCH FLOW STATES', () => {
  it('starts with default store values', () => {
    expect(chatState.isChatOpen).toBe(false);
    expect(chatState.isLoading).toBe(false);
    expect(chatState.isChatOpen).toBe(false);
    expect(chatState.messages.length).toBe(1);
    expect(chatState.messages[0].role).toBe('system');

    expect(productState.shoppingResults).toStrictEqual([]);
    expect(productState.productsInFocus).toStrictEqual([]);

    expect(searchState.isLoading).toBe(false);
    expect(searchState.isFirstSearch).toBe(true);
    expect(searchState.messages.length).toBe(1);
    expect(searchState.messages[0].role).toBe('system');
  });
  it('Performs a search', async () => {
    await searchState.processSearchRequest('test_search');
    expect(errorState.errorMessage).toBe('')
    expect(errorState.errorType).toBe(ErrorType.NONE)

    expect(chatState.isChatOpen).toBe(true);
    expect(chatState.messages.length).toBe(3);

    expect(searchState.isFirstSearch).toBe(false);
    expect(searchState.messages.length).toBe(3);
    expect(searchState.messages[0].role).toBe('system');
    expect(searchState.messages[1].role).toBe('user');
    expect(searchState.messages[2].role).toBe('assistant');
    expect(searchState.messages[2].content).toBe('search_query');

    expect(chatState.messages[0].role).toBe('system');
    expect(chatState.messages[1].role).toBe('system');
    expect(chatState.messages[2].role).toBe('assistant');

    expect(productState.shoppingResults.length).toBe(30);
    expect(productState.productsInFocus).toStrictEqual([]);
  });
});

describe('CHAT FLOW STATE', () => {
  it('Asks a question in the chat', async () => {
    await searchState.processSearchRequest('test_search');
    expect(errorState.errorMessage).toBe('')
    expect(errorState.errorType).toBe(ErrorType.NONE)

    await chatState.processNewChatMessage('mock_chat_message');
    expect(errorState.errorMessage).toBe('')
    expect(errorState.errorType).toBe(ErrorType.NONE)

    expect(chatState.messages[3].role).toBe('user');
    expect(chatState.messages[3].content).toBe('mock_chat_message');

    expect(chatState.messages[4].role).toBe('assistant');
    expect(chatState.messages[4].content).toBe('mock_chat_response');
  });
});
