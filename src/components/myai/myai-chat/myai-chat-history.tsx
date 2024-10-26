import { Component, Host, h } from '@stencil/core';
import { chatState } from '../../stores/myai-chat-store/chat-store';
import { Role } from '../../stores/myai-search-store/search-store';
import { ErrorType, errorState } from '../../stores/myai-error-store/error-store';
import { productState } from '../../stores/myai-products-store/product-store';

@Component({
  tag: 'myai-chat-history',
  styleUrl: './myai-chat-history.css',
  shadow: true,
})
export class MyaiChatHistory {
  private renderBootlrSuggestions() {
    return (
      <div class="bootlr-product-suggestions-wrap">
        {productState.productsInFocus.length > 0 &&
          productState.productsInFocus.map(product => {
            return <myai-product product={product} inFocus={true} />;
          })}
      </div>
    );
  }

  render() {
    return (
      <Host>
        {chatState.messages.map((message, index) => {
          if (index <= 2) return;
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
                innerHTML={message.role === Role.ASSISTANT ? message.content : ''}
              >
                {message.role === Role.USER ? message.content : ''}
              </div>
            </div>
          );
        })}

        {productState.productsInFocus.length > 0 &&
          !chatState.isLoading &&
          this.renderBootlrSuggestions()}

        <i class="message-loading">{chatState.isLoading && 'Bootlr is typing...'}</i>

        {errorState.errorType === ErrorType.CHAT && <myai-error />}
      </Host>
    );
  }
}
