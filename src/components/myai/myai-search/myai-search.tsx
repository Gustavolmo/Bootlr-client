import { Component, Host, State, h } from '@stencil/core';
import { searchState } from '../../stores/myai-search-store/search-store';
import { magnifyingGlass, swedishFlag } from '../../../assets/heroIcons/collection';
import { ErrorType, errorState } from '../../stores/myai-error-store/error-store';
import { chatState } from '../../stores/myai-chat-store/chat-store';

@Component({
  tag: 'myai-search',
  styleUrl: 'myai-search.css',
  shadow: true,
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
    }
  }

  private handleKeyPress = (e: KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey && navigator.maxTouchPoints === 0) {
      e.preventDefault();
      this.submitSearch(e);
    }
  };

  private returnHome = () => {
    if (searchState.isLoading) return;
    window.location.reload();
  };

  render() {
    return (
      <Host>
        {searchState.isFirstSearch && (
          <header class="search-header">

            <h2 onClick={this.returnHome}>Bootlr</h2>
            <p>The shopping assistant</p>
            <div class="header-swedish-flag">{swedishFlag('12', 0.6)} Developed in Sweden</div>
          </header>
        )}

        {!searchState.isFirstSearch && <div class="search-form-fixed-spacer"></div>}

        <section class={{"search-form-wrapper": !searchState.isFirstSearch}}>
          <form onSubmit={e => this.submitSearch(e)} class="search-form">
            <textarea
              placeholder="Tell Bootlr what you are looking for"
              maxlength="240"
              class="search-textarea"
              value={this.userPrompt}
              onInput={e => this.captureUserPrompt(e)}
              onKeyPress={this.handleKeyPress}
            />
            <button
              type="submit"
              class="myai-search-submit"
              disabled={searchState.isLoading || chatState.isLoading}
            >
              {magnifyingGlass('24px', 'gray')}
            </button>
          </form>
        </section>

        <div class="myai-search-sponsor-message">
          {/* <i>*Bootlr offers sponsored products</i> */}
        </div>
        {errorState.errorType === ErrorType.SEARCH && <myai-error />}
      </Host>
    );
  }
}
