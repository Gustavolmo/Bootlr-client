import { Component, h } from '@stencil/core';
import { productState } from '../../stores/myai-products-store/product-store';
import { searchState } from '../../stores/myai-search-store/search-store';
import { landingPageState } from '../../stores/myai-landing-page-store/landing-page-store';

@Component({
  tag: 'myai-main',
  styleUrl: './myai-main.css',
  shadow: true,
})
export class MyaiMain {
  componentWillLoad() {
    if (landingPageState.isFirstLoad) {
      landingPageState.processTrendingItems();
    }
  }

  render() {
    return (
      <article class="myai-main-wrap">
        <div class="myai-main-left">
          <myai-search />

          {productState.shoppingResults.length > 0 && searchState.isFirstSearch && (
            <myai-trending-products />
          )}
          {productState.shoppingResults.length > 0 && !searchState.isFirstSearch && (
            <myai-product-results />
          )}

          {searchState.isLoading && <myai-product-loader/>}

          {productState.shoppingResults.length > 0 && <myai-ads />}
          <myai-footer />
        </div>
        <myai-chat />
      </article>
    );
  }
}
