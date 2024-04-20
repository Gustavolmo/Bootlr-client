import { Component, Host, State, h } from '@stencil/core';
import { chatState } from '../../stores/myai-chat-store/chat-store';

@Component({
  tag: 'myai-chat-area',
  styleUrl: './myai-chat-area.css',
})
export class MyaiChat {
  @State() userMessage = '';

  private captureUserMessage(e: Event) {
    const target = e.target as HTMLTextAreaElement;
    this.userMessage = target.value.trim();
  }

  private async submitMessage(e: Event) {
    e.preventDefault();
    if (this.userMessage) {
      // TODO: chatState.sendMessageToAi()
      this.userMessage = '';
    }
  }

  render() {
    return (
      <Host>

        <div class="chat-history">
          <myai-chat-history />
        </div>

        {/* TODO: MAKE THIS A COMPOENENT */}
        <form class="chat-form">
          <textarea
            class="chat-textarea"
            maxlength="1200"
            value={this.userMessage}
            onChange={e => this.captureUserMessage(e)}
          />
          <button type="submit" onClick={e => this.submitMessage(e)} disabled={false}>
            {'>>'}
          </button>
        </form>

      </Host>
    );
  }
}
