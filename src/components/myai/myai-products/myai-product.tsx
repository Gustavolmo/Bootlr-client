import { Component, Prop, State, h } from '@stencil/core';
import { Product } from '../../stores/myai-products-store/product-store';
import { copiedSuccessfully, copyToClipboard } from '../../../assets/heroIcons/collection';

@Component({
  tag: 'myai-product',
  styleUrl: './myai-product.css',
})
export class MyaiProduct {
  @Prop() product: Product = {};
  @Prop() inFocus: boolean = false;
  @State() copySuccess: boolean = false;
  private stars = '★'.repeat(Math.round(this.product.rating));

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
        <button class="myai-product-item-name-copy" onClick={() => this.copyToClipboard()}>
          {this.copySuccess ? copiedSuccessfully('16px', 'gray') : copyToClipboard('16px', 'gray')}
        </button>
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
            <p class="info-product-title">{this.product.title}</p>{' '}
            {/* TODO: Allow users to copy the name */}
          </div>
        </a>
      </section>
    );
  }
}
