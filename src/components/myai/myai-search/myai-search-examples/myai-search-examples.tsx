import { Component, h } from '@stencil/core';


@Component({
  tag: 'myai-search-examples',
  styleUrl: './myai-search-examples.css',
  shadow: true,
})
export class MyaiSearchExamples {
  private search = `${window.location.href}/assets/copy-images/search.png`;
  private ask = `${window.location.href}/assets/copy-images/ask2.png`;
  private compare = `${window.location.href}/assets/copy-images/ask.png`;

  render() {
    return (
      <article class="search-example-wrap">
        <section class="example">
          <div class="example-title">SEARCH ANYTHING</div>
          <div class="example-content">
            <img src={this.search} alt="search-example-img" />
          </div>
        </section>

        <section class="example margin-top-36">
          <div class="example-title">ASK QUESTIONS</div>
          <div class="example-content">
            <img src={this.ask} alt="search-example-img" />
          </div>
        </section>

        <section class="example margin-top-36">
          <div class="example-title">COMPARE RESULTS</div>
          <div class="example-content">
            <img src={this.compare} alt="search-example-img" />
          </div>
        </section>
      </article>
    );
  }
}
