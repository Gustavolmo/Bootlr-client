import { Component, State, h } from '@stencil/core';
import { chatState } from '../myai-chat-store/chat-store';

@Component({
  tag: 'myai-chat-main',
  styleUrl: 'myai-chat-main.css',
})
export class MyaiChatMain {
  @State() userPrompt = '';

  private captureUserPrompt(e: Event) {
    const target = e.target as HTMLTextAreaElement;
    this.userPrompt = target.value.trim();
  }

  private async submitPrompt(e: Event) {
    e.preventDefault();
    if (this.userPrompt) {
      await chatState.processSearchRequest(this.userPrompt);
      this.userPrompt = '';
    }
  }

  render() {
    return (
      <section class="myai-chat-main-container">
        <header class="chat-main-header">What are you looking for today?</header>

        {/* TODO: MAKE THIS A COMPOENENT */}
        <form class="chat-main-form">
          <textarea
            placeholder='I am looking for...' // TODO: Add random examples like openai's suggestions
            maxlength="240"
            class="chat-main-textarea"
            onChange={e => this.captureUserPrompt(e)}
            value={this.userPrompt}
          />
          <button type="submit" onClick={e => this.submitPrompt(e)} disabled={chatState.isLoading}>
          {chatState.isLoading ? '...' : '>>'}
          </button>
        </form>
      </section>
    );
  }
}
