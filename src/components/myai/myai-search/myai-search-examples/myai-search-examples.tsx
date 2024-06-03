import { Component, h } from '@stencil/core';
import { searchState } from '../../../stores/myai-search-store/search-store';

@Component({
  tag: 'myai-search-examples',
  styleUrl: './myai-search-examples.css',
  shadow: true,
})
export class MyaiSearchExamples {
  private isLocalEnv = window.location.href === 'http://localhost:3333/';

  private bootlrAnatomy = this.isLocalEnv
    ? 'assets/copy-images/bootlr-anatomy.png'
    : `${window.location.href}/assets/copy-images/bootlr-anatomy.png`;

  private trymeDecor = this.isLocalEnv
    ? 'assets/copy-images/tryme-decor.png'
    : `${window.location.href}/assets/copy-images/tryme-decor.png`;

  private tryMeSearch() {
    searchState.processSearchRequest('You decide on the search query!');
  }

  render() {
    return (
      <article class="search-example-wrap">
        <img class="tryme-decor" src={this.trymeDecor} />
        <button onClick={this.tryMeSearch} class="let-bootlr-decide">
          TRY ME
        </button>
        <img class="search-example-img" src={this.bootlrAnatomy} alt="search-example-img" />
      </article>
    );
  }
}
