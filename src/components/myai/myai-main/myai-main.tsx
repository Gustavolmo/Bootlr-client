import { Component, Fragment, Host, h } from '@stencil/core';
import { logState } from '../../stores/myai-logs-store/logs-store';
import { searchState } from '../../stores/myai-search-store/search-store';

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

        {searchState.isFirstSearch ? <myai-footer /> : <myai-chat-input />}
      </Host>
    );
  }
}
