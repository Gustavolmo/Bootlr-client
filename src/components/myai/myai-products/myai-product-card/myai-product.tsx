import { Component, Prop, State, h } from '@stencil/core';
import { Product } from '../../../stores/myai-products-store/product-store';

@Component({
  tag: 'myai-product',
  styleUrl: './myai-product.css',
})
export class MyaiProduct {
  @Prop() product: Product = {};
  @Prop() inFocus: boolean = false;
  @State() copySuccess: boolean = false;
  @State() stars: string;

  componentWillRender() {
    this.stars = '★'.repeat(Math.round(this.product.product_rating));
  }

  render() {
    return (
      <section
        class={{
          'myai-product-item-wrap': !this.inFocus,
          'myai-product-item-wrap focus': this.inFocus,
        }}
      >
        <a
          /* TODO onClick={() => console.log('LOG THIS')} */
          href={this.product.offer.offer_page_url}
          target="_blank"
        >
          <div class="myai-product-image-wrap">
            <img src={this.product.product_photos[0]} alt="product-image" />
          </div>

          <div class="myai-product-info-wrap">
            <p class="info-product-source">{this.product.offer.store_name}</p>
            <p class="info-price-tag">
              {this.product.offer.price}{' '}
              <span class="old-price-tag">{this.product.offer.original_price}</span>
            </p>
            <div class="rating-container">
              <span class="rating-text">{this.product.product_rating}</span>{' '}
              <span class="rating-start">{this.stars}</span>{' '}
              <span class="rating-text">({this.product.product_num_reviews ?? '0 reviews'})</span>
            </div>
            <p class="info-product-delivery">{this.product.offer.shipping}</p>
            <p class="info-product-title">{this.product.product_title}</p>{' '}
          </div>
        </a>
      </section>
    );
  }
}
