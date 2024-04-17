import { Component, State, h } from '@stencil/core';

@Component({
  tag: 'myai-chat-modal',
  styleUrl: './myai-chat-modal.css',
})
export class MyaiChatModal {
  @State() isChatModalOpen = true; // TODO: This need to exist in a store

  private toggleChatModal() {
    this.isChatModalOpen = !this.isChatModalOpen;
  }

  render() {
    return (
      <section
        class={{
          'myai-chat-modal-wrap': this.isChatModalOpen,
          'myai-chat-modal-wrap-close': !this.isChatModalOpen,
        }}
      >
        <div class="chat-modal-window">
          <button
            class={{
              'chat-modal-window-button': this.isChatModalOpen,
              'chat-modal-window-button-close': !this.isChatModalOpen,
            }}
            onClick={() => this.toggleChatModal()}
          >
            {this.isChatModalOpen ? 'Close' : 'Ask'}
          </button>
          <section class="modal-chat-area">CHAT-AREA</section>
        </div>
      </section>
    );
  }
}
