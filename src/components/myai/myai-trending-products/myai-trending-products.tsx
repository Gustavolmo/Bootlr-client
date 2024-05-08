import { Component, Host, Prop, h } from '@stencil/core';
import { Product } from '../../stores/myai-products-store/product-store';

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
        <p class="myai-trending-products-sponsored">Sponsored:</p>
        <h2 class="myai-trending-products-title">{this.sectionTitle}</h2>
        <article class="myai-trending-products-wrap">
          {this.productSelection.map(product => {
            return <myai-product product={product} inFocus={false} />;
          })}
        </article>
      </Host>
    );
  }
}
