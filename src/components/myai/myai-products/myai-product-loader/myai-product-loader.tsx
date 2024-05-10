import { Component, h } from '@stencil/core';

@Component({
  tag: 'myai-product-loader',
  styleUrl: './myai-product-loader.css',
  shadow: true,
})
export class MyaiProductLoader {
  render() {
    return (
      <div class="cards">
        {[1, 2, 3, 4, 5 ,6, 7, 8].map(_ => {
          return (
            <div class="card is-loading">
              <div class="image"></div>
              <div class="content">
                <h2></h2>
                <h2></h2>
                <p></p>
              </div>
            </div>
          );
        })}
      </div>
    );
  }
}
