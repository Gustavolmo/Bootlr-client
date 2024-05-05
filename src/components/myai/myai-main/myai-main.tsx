import { Component, h } from '@stencil/core';
import { productState } from '../../stores/myai-products-store/product-store';

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
          {productState.shoppingResults.length > 0 && <myai-ads />}
          <myai-footer />
        </div>
        <myai-chat />
      </article>
    );
  }
}
