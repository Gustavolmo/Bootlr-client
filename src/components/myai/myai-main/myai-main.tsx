import { Component, h } from '@stencil/core';
import { searchState } from '../../stores/myai-search-store/search-store';
import { landingPageState } from '../../stores/myai-landing-page-store/landing-page-store';

@Component({
  tag: 'myai-main',
  styleUrl: './myai-main.css',
  shadow: true,
})
export class MyaiMain {
  componentWillLoad() {
    if (landingPageState.isFirstLoad) {
      landingPageState.processTrendingItems();
    }
  }

  render() {
    return (
      <article class="myai-main-wrap">
        <div class="myai-main-left">
          <myai-search />

          {searchState.isFirstSearch ? <myai-trending-products /> : <myai-product-results />}

          <myai-footer />
        </div>
        <myai-chat />
      </article>
    );
  }
}
