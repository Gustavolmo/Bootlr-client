import { Component, h } from '@stencil/core';

@Component({
  tag: 'myai-main',
  styleUrl: 'myai-main.css',
})
export class MyaiMain {
  render() {
    return (
      <article class="myai-main-wrap">
        <myai-chat-main />
        <myai-product-results/>
      </article>
    );
  }
}
