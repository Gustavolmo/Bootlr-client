import { Component, h } from "@stencil/core";

@Component({
  tag: 'myai-empty-results',
  styleUrl: './myai-empty-results.css',
  shadow: true,
})

export class MyaiEmptyResults {
  render(){
    return (
      <section class="empty-results-wrap">
        Ops, Bootlr didn't find anything
      </section>
    )
  }
}