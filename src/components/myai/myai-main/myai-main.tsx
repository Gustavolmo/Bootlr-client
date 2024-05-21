import { Component, Host, h } from '@stencil/core';
import { logState } from '../../stores/myai-logs-store/logs-store';
import { searchState } from '../../stores/myai-search-store/search-store';
import { ErrorType, errorState } from '../../stores/myai-error-store/error-store';

@Component({
  tag: 'myai-main',
  styleUrl: './myai-main.css',
  shadow: true,
})
export class MyaiMain {
  componentDidLoad() {
    logState.logNewVisitor();
  }

  render() {
    return (
      <Host>
        <section class="myai-content">
          <myai-search />
          {!searchState.isFirstSearch && <myai-chat-history />}
        </section>

        {searchState.isFirstSearch && <myai-footer />}

        {!searchState.isFirstSearch && errorState.errorType === ErrorType.NONE && (
          <myai-chat-input />
        )}
      </Host>
    );
  }
}
