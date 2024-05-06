import { Component, h } from '@stencil/core';
import { searchState } from '../../stores/myai-search-store/search-store';

@Component({
  tag: 'myai-search-examples',
  styleUrl: './myai-search-examples.css',
  shadow: true,
})
export class MyaiSearchExamples {
  render() {
    return (
      <article class="search-example-wrap">
        <div
          class="search-example"
          onClick={() => searchState.processSearchRequest('Ideas for mid-century home decoration')}
        >
          {' '}
          Ideas for <span class="gray">mid-century home decoration</span>
        </div>

        <div
          class="search-example"
          onClick={() => searchState.processSearchRequest('Show me beautiful things')}
        >
          {' '}
          Show me <span class="gray">beautiful things</span>
        </div>

        <div
          class="search-example"
          onClick={() =>
            searchState.processSearchRequest('Can you fing ergonomic keyboards for programming')
          }
        >
          {' '}
          Can you find <span class="gray">ergonomic keyboards for programming</span>
        </div>

        <div
          class="search-example"
          onClick={() =>
            searchState.processSearchRequest('I am looking for a funny gift for my secret santa')
          }
        >
          {' '}
          I am looking for <span class="gray">a funny gift for my secret santa</span>
        </div>
      </article>
    );
  }
}
