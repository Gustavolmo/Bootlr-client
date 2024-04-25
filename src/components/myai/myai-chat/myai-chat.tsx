import { Component, h } from '@stencil/core';
import { chatState } from '../../stores/myai-chat-store/chat-store';
import { cross, dialogue } from '../../../assets/heroIcons/collection';

@Component({
  tag: 'myai-chat',
  styleUrl: './myai-chat.css',
})
export class MyaiChat {
  private toggleChatModal() {
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
            >
              {chatState.isChatOpen ? cross("28px", "gray") : dialogue("28px", "gray")}
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
