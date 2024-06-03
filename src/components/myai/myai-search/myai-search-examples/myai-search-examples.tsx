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

  private tryMeSearch() {
    searchState.processSearchRequest('You decide on the search query!')
  }

  render() {
    return (
      <article class="search-example-wrap">
        <button onClick={this.tryMeSearch} class="let-bootlr-decide">TRY ME</button>
        <img src={this.bootlrAnatomy} alt="search-example-img" />
      </article>
    );
  }
}
