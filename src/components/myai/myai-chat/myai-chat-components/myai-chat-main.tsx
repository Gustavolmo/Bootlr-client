import { Component, State, h } from '@stencil/core';
import { pushPromptToHistory } from '../myai-chat-store/chat-store';

@Component({
  tag: 'myai-chat-main',
  styleUrl: 'myai-chat-main.css',
})
export class MyaiChatMain {
  @State() userPrompt: string;

  private captureUserPrompt(e: Event) {
    const target = e.target as HTMLTextAreaElement;
    this.userPrompt = target.value;
  }

  private submitPrompt(e: Event) {
    e.preventDefault();
    this.userPrompt ? pushPromptToHistory(this.userPrompt) : console.warn('Empty prompt, no request made');
  }

  render() {
    return (
      <section class="myai-chat-main-container">
        <header class="chat-main-header">What are you looking for today?</header>

        <form class="chat-main-form">
          <textarea maxlength="320" class="chat-main-textarea" onChange={e => this.captureUserPrompt(e)} />
          <button type="submit" onClick={e => this.submitPrompt(e)}>
            Search
          </button>
        </form>
      </section>
    );
  }
}
