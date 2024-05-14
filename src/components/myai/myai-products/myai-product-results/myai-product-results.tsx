import { Component, Fragment, Host, h } from '@stencil/core';
import { productState } from '../../../stores/myai-products-store/product-store';
import { searchState } from '../../../stores/myai-search-store/search-store';

@Component({
  tag: 'myai-product-results',
  styleUrl: './myai-product-results.css',
  shadow: true,
})
export class MyaiProductResults {
  private renderLoadedProducts() {
    return (
      <Fragment>
        {productState.productsInFocus.length > 0 &&
          productState.productsInFocus.map(product => {
            return <myai-product product={product} inFocus={true} />;
          })}
        {productState.shoppingResults.length > 0 &&
          productState.shoppingResults.map(product => {
            return <myai-product product={product} inFocus={false} />;
          })}
      </Fragment>
    );
  }

  private renderLoadingState() {
    return <myai-product-loader />;
  }

  render() {
    return (
      <Host>
        <div class="myai-product-results-wrap">
          {searchState.isLoading ? this.renderLoadingState() : this.renderLoadedProducts()}
          {productState.isResultEmpty && <myai-empty-results/>}
        </div>
      </Host>
    );
  }
}
