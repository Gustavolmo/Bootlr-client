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
              const stars = '★'.repeat(Math.round(product.rating));

              return (
                <section class="myai-product-item-wrap">
                  <button>Ask</button>
                  <a href={product.link} target="_blank">
                    <div class="myai-product-image-wrap">
                      <img src={product.thumbnail} alt="test" />
                    </div>

                    <div class="myai-product-info-wrap">
                      <p class="info-prouct-source">{product.source}</p>
                      <p class="info-price-tag">{product.price}</p>

                      <div>
                        <span class="rating-text">{product.rating}</span>{' '}
                        <span class="rating-start">{stars}</span>{' '}
                        <span class="rating-text">({product.reviews ?? '0 reviews'})</span>
                      </div>

                      <p class="info-product-delivery">{product.delivery}</p>

                      <p class="info-product-title">{product.title}</p>
                    </div>
                  </a>
                </section>
              );
            })}
        </div>
      </Host>
    );
  }
}
