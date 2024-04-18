import { Component, h } from '@stencil/core';

@Component({
  tag: 'myai-main',
  styleUrl: './myai-main.css',
  shadow: true,
})
export class MyaiMain {
  render() {
    return (
      <article class="myai-main-wrap">
        <div class="myai-main-left">
          <myai-search />
          <myai-product-results />
        </div>
        <myai-chat />
      </article>
    );
  }
}
