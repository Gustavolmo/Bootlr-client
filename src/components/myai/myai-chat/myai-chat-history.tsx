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
      <div
        class={
          chatState.isLoading
            ? 'bootlr-product-suggestions-wrap close'
            : 'bootlr-product-suggestions-wrap open'
        }
      >
        {productState.productsInFocus.length > 0 &&
          productState.productsInFocus.map(product => {
            return <myai-product product={product} inFocus={true} />;
          })}
      </div>
    );
  }

  private scrollToBottom() {
    window.scrollTo({
      left: 0,
      top: window.outerHeight * window.outerHeight, // TODO: refactor this hack
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

        {productState.productsInFocus.length > 0 && this.renderBootlrSuggestions()}

        {chatState.isLoading && <p class="message-loading">Bootlr is typing...</p>}

        {errorState.errorType === ErrorType.CHAT && <myai-error />}
      </Host>
    );
  }
}
