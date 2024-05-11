import { Component, Prop, State, h } from '@stencil/core';
import { Product } from '../../../stores/myai-products-store/product-store';
import { copiedSuccessfully, copyToClipboard } from '../../../../assets/heroIcons/collection';

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
    this.stars = '★'.repeat(Math.round(this.product.rating));
  }

  private copyToClipboard() {
    navigator.clipboard.writeText(this.product.title);
    this.copySuccess = true;
    setTimeout(() => {
      this.copySuccess = false;
    }, 2000);
  }

  render() {
    return (
      <section
        class={{
          'myai-product-item-wrap': !this.inFocus,
          'myai-product-item-wrap focus': this.inFocus,
        }}
      >
        <div class="myai-product-top">
          <span class="bootlr-suggested">{this.inFocus && 'Bootlr:'}</span>
          <button onClick={() => this.copyToClipboard()} class="myai-product-item-name-copy">
            {this.copySuccess
              ? copiedSuccessfully('16px', 'gray')
              : copyToClipboard('16px', 'gray')}
          </button>
        </div>
        <a href={this.product.link} target="_blank">
          <div class="myai-product-image-wrap">
            <img src={this.product.thumbnail} alt="product-image" />
          </div>

          <div class="myai-product-info-wrap">
            <p class="info-product-source">{this.product.source}</p>
            <p class="info-price-tag">
              {this.product.price} <span class="old-price-tag">{this.product.old_price}</span>
            </p>
            <div class="rating-container">
              <span class="rating-text">{this.product.rating}</span>{' '}
              <span class="rating-start">{this.stars}</span>{' '}
              <span class="rating-text">({this.product.reviews ?? '0 reviews'})</span>
            </div>
            <p class="info-product-delivery">{this.product.delivery}</p>
            <p class="info-product-title">{this.product.title}</p>{' '}
          </div>
        </a>
      </section>
    );
  }
}
