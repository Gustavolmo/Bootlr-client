import { Component, State, h } from '@stencil/core';
import { searchState } from '../../../stores/myai-search-store/search-store';
import {
  canYouFindExamples,
  iAmLookingForExamples,
  ideasForExamples,
  showMeExamples,
} from './example-list';

@Component({
  tag: 'myai-search-examples',
  styleUrl: './myai-search-examples.css',
  shadow: true,
})
export class MyaiSearchExamples {
  @State() ideasFor: string;
  @State() showMe: string;
  @State() canYouFind: string;
  @State() iAmLookingFor: string;

  componentWillLoad() {
    this.ideasFor = this.suggestionRandomizer(ideasForExamples);
    this.showMe = this.suggestionRandomizer(showMeExamples);
    this.canYouFind = this.suggestionRandomizer(canYouFindExamples);
    this.iAmLookingFor = this.suggestionRandomizer(iAmLookingForExamples);
  }

  private suggestionRandomizer = (examples: string[]): string => {
    const randomIndex = Math.floor(Math.random() * examples.length);
    return examples[randomIndex];
  };

  render() {
    return (
      <article
        class={{
          'search-example-wrap': !searchState.isLoading,
          'search-example-wrap disabled': searchState.isLoading,
        }}
      >
        <div
          class="search-example"
          onClick={() => searchState.processSearchRequest(`Ideas for ${this.ideasFor}`)}
        >
          Ideas for <span class="serch-example-type">{this.ideasFor}</span>
        </div>

        <div
          class="search-example"
          onClick={() => searchState.processSearchRequest(`Show me ${this.showMe}`)}
        >
          Show me <span class="serch-example-type">{this.showMe}</span>
        </div>

        <div
          class="search-example"
          onClick={() => searchState.processSearchRequest(`Can you find ${this.canYouFind}`)}
        >
          Can you find <span class="serch-example-type">{this.canYouFind}</span>
        </div>

        <div
          class="search-example"
          onClick={() => searchState.processSearchRequest(`I am looking for ${this.iAmLookingFor}`)}
        >
          I am looking for <span class="serch-example-type">{this.iAmLookingFor}</span>
        </div>
      </article>
    );
  }
}
