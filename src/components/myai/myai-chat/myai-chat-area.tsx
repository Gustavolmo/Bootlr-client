import { Component, Host, State, h } from '@stencil/core';
import { chatState } from '../../stores/myai-chat-store/chat-store';

@Component({
  tag: 'myai-chat-area',
  styleUrl: './myai-chat-area.css',
})
export class MyaiChat {
  @State() userMessage = '';
  private chatHistoryDiv: HTMLDivElement;

  private scrollToBottom() {
    if (this.chatHistoryDiv) {
      this.chatHistoryDiv.scrollTo({
        left: 0,
        top: this.chatHistoryDiv.scrollHeight,
        behavior: 'smooth',
      });
    }
  }

  componentDidRender() {
    this.scrollToBottom();
  }

  private captureUserMessage(e: Event) {
    const target = e.target as HTMLTextAreaElement;
    this.userMessage = target.value.trim();
  }

  private submitMessage(e: Event) {
    console.log(this.userMessage);
    e.preventDefault();
    if (this.userMessage) {
      chatState.processNewChatMessage(this.userMessage);
      this.userMessage = ''
    }
  }

  render() {
    return (
      <Host>
        <div ref={el => (this.chatHistoryDiv = el)} class="chat-history">
          <myai-chat-history />
        </div>

        <form class="chat-form">
          <textarea
            class="chat-textarea"
            maxlength="1200"
            value={this.userMessage}
            onChange={e => this.captureUserMessage(e)}
          />
          <button type="submit" onClick={e => this.submitMessage(e)} disabled={chatState.isLoading}>
            {'>>'}
          </button>
        </form>
      </Host>
    );
  }
}
