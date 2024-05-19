import { Component, h } from '@stencil/core';
import { logState } from '../../stores/myai-logs-store/logs-store';

@Component({
  tag: 'myai-main',
  styleUrl: './myai-main.css',
  shadow: true,
})
export class MyaiMain {
  componentDidLoad() {
    logState.logNewVisitor()
  }

  render() {
    return (
      <article class="myai-main-wrap">
        <div class="myai-main-left">
          <myai-search />

          <myai-product-results />

          <myai-footer />
        </div>
        <myai-chat />
      </article>
    );
  }
}
