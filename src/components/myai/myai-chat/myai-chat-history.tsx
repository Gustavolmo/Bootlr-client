import { Component, Fragment, h } from '@stencil/core';
import { chatState } from '../../stores/myai-chat-store/chat-store';
import { Role } from '../../stores/myai-search-store/search-store';

@Component({
  tag: 'myai-chat-history',
  styleUrl: './myai-chat-history.css',
  shadow: true,
})
export class MyaiChat {
  render() {
    return (
      <Fragment>
        {chatState.messages.map((message, index) => {
          if (index === 1) return
          return <div class="history-message-box">
            <b>{message.role === Role.USER ? 'You' : 'Bootler'}</b>
            <p>{message.content}</p>
          </div>
        })}
      </Fragment>
    );
  }
}
