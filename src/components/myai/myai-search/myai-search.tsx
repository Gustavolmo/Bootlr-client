import { Component, State, h } from '@stencil/core';
import { searchState } from '../../stores/myai-search-store/search-store';
import { bootlrIcon, magnifyingGlass } from '../../../assets/heroIcons/collection';
import { ErrorType, errorState } from '../../stores/myai-error-store/error-store';
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

      this.userPrompt = '';
    }
  }

  private returnHome = () => {
    if (chatState.isLoading || searchState.isLoading) return
    window.location.reload();
  };

  render() {
    return (
      <section class="myai-search-container">
        <header class="search-header">
          <h2
            onClick={this.returnHome}
            class={searchState.isLoading && 'search-loading'}
          >
            Bootlr{bootlrIcon('52')}
          </h2>
          <p>The shopping assistant</p>
        </header>
        <form class="search-form">
          <textarea
            placeholder="Tell Bootlr what you are looking for"
            maxlength="240"
            class="search-textarea"
            onChange={e => this.captureUserPrompt(e)}
            value={this.userPrompt}
          />
          <button
            class="myai-search-submit"
            type="submit"
            onClick={e => this.submitSearch(e)}
            disabled={searchState.isLoading || chatState.isLoading}
          >
            {magnifyingGlass('24px', 'gray')}
          </button>
        </form>
        <div class="myai-search-sponsor-message">
          <i>*Bootlr offers sponsored products</i>
        </div>
        {searchState.isFirstSearch && <myai-search-examples />}
        {errorState.errorType === ErrorType.SEARCH && <myai-error />}
      </section>
    );
  }
}
