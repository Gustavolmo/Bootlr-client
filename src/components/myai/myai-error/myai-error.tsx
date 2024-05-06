import { Component, h } from '@stencil/core';
import { errorState, errorStore } from '../../stores/myai-error-store/error-store';
import { cross, errorIcon } from '../../../assets/heroIcons/collection';

@Component({
  tag: 'myai-error',
  styleUrl: './myai-error.css',
  shadow: true,
})
export class MyaiError {
  render() {
    return (
      <article class="myai-error-wrap">
        <p class="error-message">
          {errorIcon('24px', '#db5151')}
          {errorState.errorMessage}
          <span onClick={() => errorStore.reset()} class="error-message-close">
            {cross('20px', '#db5151')}
          </span>
        </p>
      </article>
    );
  }
}
