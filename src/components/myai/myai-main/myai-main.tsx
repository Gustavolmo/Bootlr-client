import { Component, Fragment, h } from '@stencil/core';
import { productState } from '../../stores/myai-products-store/product-store';
import { searchState } from '../../stores/myai-search-store/search-store';

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

          {searchState.isFirstSearch && <myai-trending-products />}

          {productState.shoppingResults.length > 0 && <myai-product-results />}

          {productState.shoppingResults.length > 0 && <myai-ads />}
          
          <myai-footer />
        </div>
        <myai-chat />
      </article>
    );
  }
}
