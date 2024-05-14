import { Component, Host, h } from '@stencil/core';
import { productState } from '../../../stores/myai-products-store/product-store';
import { searchState } from '../../../stores/myai-search-store/search-store';

@Component({
  tag: 'myai-trending-products',
  styleUrl: './myai-trending-products.css',
  shadow: true,
})
export class MyaiTrendingProducts {
  private renderLoadedProducts() {
    return (
      <article class="myai-trending-products-wrap">
        {productState.productsInFocus.length > 0 &&
          productState.productsInFocus.map(product => {
            return <myai-product product={product} inFocus={true} />;
          })}
        {productState.shoppingResults.map(product => {
          return <myai-product product={product} inFocus={false} />;
        })}
      </article>
    );
  }

  private renderLoadingState() {
    return <myai-product-loader />;
  }

  render() {
    return (
      <Host>
        <p class="myai-trending-products-title">BOOTLR PICKS</p>
        {searchState.isLoading ? this.renderLoadingState() : this.renderLoadedProducts()}
        {productState.isResultEmpty && <myai-empty-results/>}
      </Host>
    );
  }
}
