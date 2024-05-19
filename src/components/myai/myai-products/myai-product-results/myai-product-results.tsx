import { Component, Fragment, Host, h } from '@stencil/core';
import { productState } from '../../../stores/myai-products-store/product-store';
import { searchState } from '../../../stores/myai-search-store/search-store';

@Component({
  tag: 'myai-product-results',
  styleUrl: './myai-product-results.css',
  shadow: true,
})
export class MyaiProductResults {
  private renderSearchResults() {
    return (
      <Fragment>
        <section class="myai-product-results-message-wrap">
          <div class="product-results-message">
            <b>Bootlr:</b>
            <p>
              I found these results online.
            </p>
          </div>
        </section>

        <section class="myai-product-results-wrap">
          {productState.shoppingResults.map(product => {
            return <myai-product product={product} inFocus={false} />;
          })}
        </section>
      </Fragment>
    );
  }

  render() {
    return (
      <Host>
        {searchState.isLoading && <p class="bootlr-is-searching">Bootlr is searching...</p>}
        {productState.shoppingResults.length > 0 && this.renderSearchResults()}
        {productState.isResultEmpty && <myai-empty-results />}
      </Host>
    );
  }
}
