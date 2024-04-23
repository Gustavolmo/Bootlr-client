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
        <div class="myai-product-results-wrap">
          {productState.shoppingResults.length > 0 &&
            productState.shoppingResults.map(product => {
              return <myai-product product={product}/> 
            })}
        </div>
      </Host>
    );
  }
}
