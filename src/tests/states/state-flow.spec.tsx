import { searchState } from '../../components/stores/myai-search-store/search-store';
import { productState } from '../../components/stores/myai-products-store/product-store';
import { chatState } from '../../components/stores/myai-chat-store/chat-store';
import { ErrorType, errorState } from '../../components/stores/myai-error-store/error-store';

describe('SEARCH FLOW STATES', () => {
  it('starts with default store values', () => {
    expect(chatState.isChatEnabled).toBe(false);
    expect(chatState.isChatOpen).toBe(false);
    expect(chatState.isLoading).toBe(false);
    expect(chatState.isChatOpen).toBe(false);
    expect(chatState.isChatEnabled).toBe(false);
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

    expect(chatState.isChatEnabled).toBe(true);
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

    expect(productState.shoppingResults.length).toBe(60);
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

    expect(productState.productsInFocus).toStrictEqual([
      {
        delivery: 'Free delivery by Wed, Apr 24',
        extensions: ['Wireless', 'QWERTY', 'PC'],
        extracted_price: 183.47,
        link: 'https://keyclicks.ca/products/w-ergo-2-4g-wireless-split-ergonomic-mechanical-keyboard?variant=46317996179745&currency=CAD&utm_medium=product_sync&utm_source=google&utm_content=sag_organic&utm_campaign=sag_organic&srsltid=AfmBOoqMEmuqpvVKQgotj3YL4Z6liBJakdTBKJjHWayELXryqtkNB0Yuf0A&com_cvv=d30042528f072ba8a22b19c81250437cd47a2f30330f0ed03551c4efdaf3409e',
        position: 1,
        price: '$183.47',
        product_id: '11778386485808355449',
        product_link:
          'https://www.google.com/shopping/product/1?gl=us&prds=pid:11778386485808355449',
        serpapi_product_api:
          'https://serpapi.com/search.json?device=desktop&engine=google_product&gl=us&google_domain=google.com&hl=en&product_id=11778386485808355449',
        source: 'keyclicks.ca',
        thumbnail:
          'https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcSR5ySTkVaHnWTicHE7kD0gBD_WPbSvd9nYHMbWD6VD2sNImGwOnNdlyy5p0565-enVe7MCa_W45mMP_GjGDJzNfoLbWYPimQKd9BNuQyrk-AIB1x_YmWcCZw&usqp=CAE',
        title: 'W-Ergo Wireless Split Keyboard',
      },
    ]);
  });
});
