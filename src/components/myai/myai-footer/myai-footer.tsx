import { Component, h } from '@stencil/core';

@Component({
  tag: 'myai-footer',
  styleUrl: './myai-footer.css',
  shadow: true,
})
export class MyaiFooter {
  render() {
    return (
      <footer class="myai-footer-wrap">
        <div class="myai-footer-title">Bootlr - The shopping assistant</div>
        <div class="myai-footer-contact">
          Contact: <a href="mailto:admin@bootlr.com"> admin@bootlr.com</a>
        </div>
        <div class="myai-footer-policy">
          Terms: <a href="/policy.html">privacy Policy</a>
        </div>
      </footer>
    );
  }
}
