import { Component, Host, State, h } from '@stencil/core';
import { searchState } from '../../stores/myai-search-store/search-store';
import { bootlrIcon, magnifyingGlass, swedishFlag } from '../../../assets/heroIcons/collection';
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
    }
  }

  private handleKeyPress = (e: KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
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
        <header
          class={{
            'search-header': searchState.isFirstSearch,
            'search-header search-header-closed': !searchState.isFirstSearch,
          }}
        >
          <div class="header-swedish-flag">{swedishFlag('12', 0.6)} Developed in Sweden</div>

          <h2 onClick={this.returnHome}>Bootlr{bootlrIcon('52')}</h2>
          <p>The shopping assistant</p>
        </header>

        {!searchState.isFirstSearch && (
          <header class="search-header">
            <h2 onClick={this.returnHome}>Bootlr {bootlrIcon('40')}</h2>
          </header>
        )}

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
        <div class="myai-search-sponsor-message">
          {/* <i>*Bootlr offers sponsored products</i> */}
        </div>
        {searchState.isFirstSearch && <myai-search-examples />}
        {errorState.errorType === ErrorType.SEARCH && <myai-error />}
      </Host>
    );
  }
}
