import { Component, Host, h } from '@stencil/core';
import { chatState } from '../../stores/myai-chat-store/chat-store';
import { Role } from '../../stores/myai-search-store/search-store';

@Component({
  tag: 'myai-chat-history',
  styleUrl: './myai-chat-history.css',
  shadow: true,
})
export class MyaiChatHistory {
  render() {
    return (
      <Host>
        {chatState.messages.map((message, index) => {
          if (index <= 1) return;
          return (
            <div
              class={{
                'history-message-box-you': message.role === Role.USER,
                'history-message-box-bootler': message.role === Role.ASSISTANT,
              }}
            >
              <b>{message.role === Role.USER ? 'You:' : 'Bootler:'}</b>
              <div
                class="message-box-content"
                innerHTML={message.role === Role.ASSISTANT ? message.content : ''}
              >
                {message.role === Role.USER ? message.content : ''}
              </div>

            </div>
          );
        })}
        <i class="message-loading">{chatState.isLoading && 'Bootler is typing...'}</i>
      </Host>
    );
  }
}
