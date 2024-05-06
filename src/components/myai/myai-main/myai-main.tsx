import { Component, h } from '@stencil/core';
import { productState } from '../../stores/myai-products-store/product-store';
import { ErrorType, errorState } from '../../stores/myai-error-store/error-store';
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
          {errorState.errorType === ErrorType.SEARCH && <myai-error/>}
          {searchState.isFirstSearch && <myai-search-examples />}
          <myai-product-results />
          {productState.shoppingResults.length > 0 && <myai-ads />}
          <myai-footer />
        </div>
        <myai-chat />
      </article>
    );
  }
}
