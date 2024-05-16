import { Component, h } from '@stencil/core';
import { chatState } from '../../stores/myai-chat-store/chat-store';
import { cross, dialogueBallon } from '../../../assets/heroIcons/collection';
import { searchState } from '../../stores/myai-search-store/search-store';

@Component({
  tag: 'myai-chat',
  styleUrl: './myai-chat.css',
})
export class MyaiChat {
  private toggleChatModal() {
    chatState.isNewChatNotification = false;
    chatState.isChatOpen = !chatState.isChatOpen;
  }

  render() {
    return (
      <section
        class={{
          'myai-chat-wrap': chatState.isChatOpen,
          'myai-chat-wrap-close': !chatState.isChatOpen,
        }}
      >
        <div class="chat-window">
          
          {chatState.isChatEnabled && (
            <button
              class={{
                'chat-window-button': chatState.isChatOpen,
                'chat-window-button-close': !chatState.isChatOpen,
              }}
              onClick={() => this.toggleChatModal()}
              disabled={searchState.isLoading}
            >
              {chatState.isChatOpen ? cross('28px', 'gray') : dialogueBallon('28px', 'gray')}
              {chatState.isNewChatNotification && <div class="notification-alert">1</div>}
            </button>
          )}

          <section class="chat-area">
            <myai-chat-area />
          </section>
        </div>
      </section>
    );
  }
}
