import { Component, Host, Prop, h } from '@stencil/core';
import { Product, productState } from '../../stores/myai-products-store/product-store';

@Component({
  tag: 'myai-trending-products',
  styleUrl: './myai-trending-products.css',
  shadow: true,
})
export class MyaiTrendingProducts {
  @Prop() sectionTitle: string;
  @Prop() productSelection: Product[];

  render() {
    return (
      <Host>
        <p class="myai-trending-products-title">TODAY'S DEALS</p>
        <article class="myai-trending-products-wrap">
        {productState.productsInFocus.length > 0 &&
            productState.productsInFocus.map(product => {
              return <myai-product product={product} inFocus={true} />;
            })}
          {productState.shoppingResults.map(product => {
            return <myai-product product={product} inFocus={false} />;
          })}
        </article>
      </Host>
    );
  }
}
