import { Component, h } from '@stencil/core';

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

  render() {
    return (
      <article class="search-example-wrap">
        <img src={this.bootlrAnatomy} alt="search-example-img" />
      </article>
    );
  }
}
