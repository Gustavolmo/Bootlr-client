import { Component, State, h } from '@stencil/core';
import { chatState } from '../../stores/myai-chat-store/chat-store';
import { sparkles } from '../../../assets/heroIcons/collection';
import { searchState } from '../../stores/myai-search-store/search-store';

@Component({
  tag: 'myai-chat-input',
  styleUrl: './myai-chat-input.css',
})
export class MyaiChatInput {
  @State() userMessage = '';

  private isLocalEnv = window.location.href === 'http://localhost:3333/';
  private chatBulb = this.isLocalEnv
    ? 'assets/copy-images/chat-bulb.svg'
    : `${window.location.href}/assets/copy-images/chat-bulb.svg`;

  private captureUserMessage(e: Event) {
    const target = e.target as HTMLTextAreaElement;
    this.userMessage = target.value.trim();
  }

  private async submitMessage(e: Event) {
    e.preventDefault();
    if (this.userMessage) {
      const chatMessage = this.userMessage
      this.userMessage = '';
      await chatState.processNewChatMessage(chatMessage);
    }
  }

  private handleKeyPress = (e: KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey && navigator.maxTouchPoints === 0) {
      e.preventDefault();
      this.submitMessage(e);
    }
  };


  render() {
    return (
      <section class="chat-bottom-section">
        <form onSubmit={e => this.submitMessage(e)} class="chat-form">
          <img class="chat-bulb" src={this.chatBulb} alt="" />
          <textarea
            placeholder="You can ask Bootlr about the search results."
            class="chat-textarea"
            maxlength="1200"
            value={this.userMessage}
            onInput={e => this.captureUserMessage(e)}
            onKeyPress={this.handleKeyPress}
          />
          <button
            type="submit"
            class="chat-textarea-submit"
            disabled={chatState.isLoading || searchState.isLoading}
          >
            {sparkles('28px', '#fffdf0')}
          </button>
        </form>
        <i class="chat-bootlr-disclaimer">
          *Bootlr can make mistakes. Check important info.
        </i>
      </section>
    );
  }
}
