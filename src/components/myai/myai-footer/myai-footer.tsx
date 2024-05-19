import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'myai-footer',
  styleUrl: './myai-footer.css',
  shadow: true,
})
export class MyaiFooter {
  render() {
    return (
      <Host>
        <footer class="myai-footer-wrap">
          <div class="myai-footer-title">Bootlr.com</div>
          <div class="myai-footer-policy">
            Terms:
            <a href="/policy.html" target="_blank">
              Privacy Policy
            </a>
          </div>
          <div class="myai-footer-contact">
            Contact:<a href="mailto:admin@bootlr.com">admin@bootlr.com</a>
          </div>
        </footer>
      </Host>
    );
  }
}
