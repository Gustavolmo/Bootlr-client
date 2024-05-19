import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'myai-chat',
  styleUrl: './myai-chat.css',
  shadow: true,
})
export class MyaiChat {
  render() {
    return (
      <Host>
        <myai-chat-history />
        <myai-chat-input />
      </Host>
    );
  }
}
