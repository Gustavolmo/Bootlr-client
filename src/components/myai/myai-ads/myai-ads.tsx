import { Component, Host, h } from '@stencil/core';

declare global {
  interface Window {
    adsbygoogle: any;
  }
}

@Component({
  tag: 'myai-ads',
  styleUrl: './myai-ads.css',
  shadow: true,
})
export class MyaiAds {
  componentDidLoad() {
    if (!window.adsbygoogle) {
      (window.adsbygoogle = window.adsbygoogle || []).push({});
    }
  }

  render() {
    return (
      <Host>
        <section class="myai-ads-wrap">
          <ins
            class="adsbygoogle"
            style={{ display: 'block' }}
            data-ad-format="autorelaxed"
            data-ad-client="ca-pub-7033679041342232"
            data-ad-slot="3878994003"
          ></ins>
        </section>
      </Host>
    );
  }
}
