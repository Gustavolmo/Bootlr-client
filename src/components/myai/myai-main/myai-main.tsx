import { Component, Host, h } from '@stencil/core';
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
        <myai-search />
        {!searchState.isFirstSearch && <myai-chat />}
        <div class="growth-fix"></div>
        {searchState.isFirstSearch && <myai-footer />}
      </Host>
    );
  }
}
