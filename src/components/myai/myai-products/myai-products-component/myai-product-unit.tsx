import { Component, h } from '@stencil/core';

@Component({
  tag: 'myai-product-unit',
})
export class MyaiProductUnit {
  render() {
    return (
      <section>
        SINGLE PROCUT
        <myai-chat-modal />
      </section>
    );
  }
}