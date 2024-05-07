import { Component, Host, Prop, h } from '@stencil/core';

declare global {
  interface Window {
    adsbygoogle: any;
  }
}

@Component({
  tag: 'myai-display-ads',
  styleUrl: './myai-display-ads.css',
  shadow: true,
})
export class MyaiDisplayAds {

  componentDidLoad() {
    if (!window.adsbygoogle) {
      (window.adsbygoogle = window.adsbygoogle || []).push({});
    }
  }

  render() {
    return (
      <Host>
        <section class="myai-display-ads-wrap">
          <script
            async
            src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-7033679041342232"
            crossorigin="anonymous"
          ></script>
          <ins
            class="adsbygoogle"
            style={{ display: 'block' }}
            data-ad-client="ca-pub-7033679041342232"
            data-ad-format="auto"
            data-full-width-responsive="true"
            data-ad-slot="9525942474"
          ></ins>
        </section>
      </Host>
    );
  }
}
