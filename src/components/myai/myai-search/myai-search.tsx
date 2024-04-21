import { Component, State, h } from '@stencil/core';
import { searchState } from '../../stores/myai-search-store/search-store';
import { chatState } from '../../stores/myai-chat-store/chat-store';

@Component({
  tag: 'myai-search',
  styleUrl: 'myai-search.css',
})
export class MyaiSearch {
  @State() userPrompt = '';

  private captureUserPrompt(e: Event) {
    const target = e.target as HTMLTextAreaElement;
    this.userPrompt = target.value.trim();
  }

  private async submitSearch(e: Event) {
    e.preventDefault();
    if (this.userPrompt) {
      await searchState.processSearchRequest(this.userPrompt);
      chatState.enableChat();
      this.userPrompt = '';
    }
  }

  render() {
    return (
      <section class="myai-search-container">
        <header class="search-header">BOOTLER</header>

        {/* TODO: MAKE THIS A COMPOENENT */}
        <form class="search-form">
          <textarea
            placeholder='I am looking for a wedding gift...' // TODO: Add random examples like openai's suggestions
            maxlength="240"
            class="search-textarea"
            onChange={e => this.captureUserPrompt(e)}
            value={this.userPrompt}
          />
          <button type="submit" onClick={e => this.submitSearch(e)} disabled={searchState.isLoading}>
          {'>>'}
          </button>
        </form>
      </section>
    );
  }
}
