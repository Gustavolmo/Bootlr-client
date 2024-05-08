import { Component, Fragment, h } from '@stencil/core';
import { productState } from '../../stores/myai-products-store/product-store';
import { searchState } from '../../stores/myai-search-store/search-store';
import { summerProducts, trendingProducts } from '../myai-trending-products/sponsored-products';

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

          {searchState.isFirstSearch && (
            <Fragment>
              <myai-trending-products
                sectionTitle="Most popular this week"
                productSelection={trendingProducts}
              />
              <myai-trending-products
                sectionTitle="Summer is here"
                productSelection={summerProducts}
              />
            </Fragment>
          )}

          {productState.shoppingResults.length > 0 && <myai-product-results />}
          {productState.shoppingResults.length > 0 && <myai-ads />}
          <myai-footer />
        </div>
        <myai-chat />
      </article>
    );
  }
}
