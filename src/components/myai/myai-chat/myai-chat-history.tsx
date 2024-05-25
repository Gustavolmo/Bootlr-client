import { Component, Host, h } from '@stencil/core';
import { chatState } from '../../stores/myai-chat-store/chat-store';
import { Role } from '../../stores/myai-search-store/search-store';
import { ErrorType, errorState } from '../../stores/myai-error-store/error-store';
import { Product, productState } from '../../stores/myai-products-store/product-store';

@Component({
  tag: 'myai-chat-history',
  styleUrl: './myai-chat-history.css',
  shadow: true,
})
export class MyaiChatHistory {
  private populateSuggestions = (productReference: string[]): Product[] => {
    if (!productReference || productReference.length === 0) return [];

    const matchedProducts = productState.shoppingResults.filter(product => {
      return productReference.some(reference => product.product_title.includes(reference));
    });

    if (matchedProducts.length === 0) return [];

    const uniqueProductMap = new Map<string, Product>();
    matchedProducts.forEach(product => {
      if (!uniqueProductMap.has(product.product_id)) {
        uniqueProductMap.set(product.product_id, product);
      }
    });

    const uniqueProducts = Array.from(uniqueProductMap.values());
    return uniqueProducts;
  };

  private renderBootlrSuggestions(suggestions: Product[]) {
    return (
      <div class={'bootlr-product-suggestions-wrap'}>
        {suggestions.length > 0 &&
          suggestions.map(product => {
            return <myai-product product={product} inFocus={true} />;
          })}
      </div>
    );
  }

  private scrollToBottom() {
    window.scrollTo({
      left: 0,
      top: document.body.scrollHeight,
      behavior: 'smooth',
    });
  }

  componentDidRender() {
    this.scrollToBottom();
  }

  render() {
    return (
      <Host>
        <myai-product-results />

        {chatState.messages.map((message, index) => {
          if (index <= 2) return;

          let productReference: string[];
          let responseText: string;
          let suggestions: Product[] = [];

          if (message.role === Role.ASSISTANT) {
            productReference = JSON.parse(message.content).productReference;
            responseText = JSON.parse(message.content).responseText;
            suggestions = this.populateSuggestions(productReference);
          }

          return (
            <div
              class={{
                'history-message-box-you': message.role === Role.USER,
                'history-message-box-bootlr': message.role === Role.ASSISTANT,
              }}
            >
              <b>{message.role === Role.USER ? 'You:' : 'Bootlr:'}</b>
              <div
                class="message-box-content"
                innerHTML={message.role === Role.ASSISTANT ? responseText : ''}
              >
                {message.role === Role.USER ? message.content : ''}
              </div>

              {suggestions.length > 0 && this.renderBootlrSuggestions(suggestions)}
            </div>
          );
        })}

        {chatState.isLoading && <p class="message-loading">Bootlr is typing...</p>}

        {errorState.errorType === ErrorType.CHAT && <myai-error />}
      </Host>
    );
  }
}
