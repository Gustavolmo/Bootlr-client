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

  private captureUserMessage(e: Event) {
    const target = e.target as HTMLTextAreaElement;
    this.userMessage = target.value.trim();
  }

  private async submitMessage(e: Event) {
    e.preventDefault();
    if (this.userMessage) {
      await chatState.processNewChatMessage(this.userMessage);
      this.userMessage = '';
    }
  }

  render() {
    return (
      <section class="chat-bottom-section">
        <form class="chat-form">
          <textarea
            placeholder="You can ask Bootlr about the search results."
            class="chat-textarea"
            maxlength="1200"
            value={this.userMessage}
            onChange={e => this.captureUserMessage(e)}
          />
          <button
            type="submit"
            class="chat-textarea-submit"
            onClick={e => this.submitMessage(e)}
            disabled={chatState.isLoading || searchState.isLoading}
          >
            {sparkles('32px', 'black')}
          </button>
        </form>
        <i class="chat-bootlr-disclaimer">
          *Bootlr can make mistakes, always check the information before buying
        </i>
      </section>
    );
  }
}
