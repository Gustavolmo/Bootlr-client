import { Component, Host, h } from '@stencil/core';
import { productState } from '../../stores/myai-products-store/product-store';

@Component({
  tag: 'myai-product-results',
  styleUrl: './myai-product-results.css',
  shadow: true,
})
export class MyaiProductResults {
  render() {
    return (
      <Host>
        <b>{productState.productsInFocus.length > 0 && 'Bootler is looking at:'}</b>
        <div class="myai-product-in-focus-wrap">
          {productState.productsInFocus.length > 0 &&
            productState.productsInFocus.map(product => {
              return <myai-product product={product} inFocus={true}/>;
            })}
        </div>
        <b>{productState.shoppingResults.length > 0 && 'Bootler found:'}</b>
        <div class="myai-product-results-wrap">
          {productState.shoppingResults.length > 0 &&
            productState.shoppingResults.map(product => {
              return <myai-product product={product} inFocus={false}/>;
            })}
        </div>
      </Host>
    );
  }
}
