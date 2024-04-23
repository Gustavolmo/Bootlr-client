import { Component, Prop, h } from '@stencil/core';
import { Product } from '../../stores/myai-products-store/product-store';

@Component({
  tag: 'myai-product',
  styleUrl: './myai-product.css',
})
export class MyaiProduct {
  @Prop() product: Product = {};
  private stars = '★'.repeat(Math.round(this.product.rating));

  render() {
    return (
      <section class="myai-product-item-wrap">
        <button>Ask</button>
        <a href={this.product.link} target="_blank">
          <div class="myai-product-image-wrap">
            <img src={this.product.thumbnail} alt="test" />
          </div>

          <div class="myai-product-info-wrap">
            <p class="info-prouct-source">{this.product.source}</p>
            <p class="info-price-tag">{this.product.price}</p>

            <div>
              <span class="rating-text">{this.product.rating}</span>{' '}
              <span class="rating-start">{this.stars}</span>{' '}
              <span class="rating-text">({this.product.reviews ?? '0 reviews'})</span>
            </div>

            <p class="info-product-delivery">{this.product.delivery}</p>

            <p class="info-product-title">{this.product.title}</p>
          </div>
        </a>
      </section>
    );
  }
}
