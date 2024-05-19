import { h } from '@stencil/core';
import { SpecPage, newSpecPage } from '@stencil/core/testing';
import { MyaiMain } from '../../components/myai/myai-main/myai-main';
import { MyaiChat } from '../../components/myai/myai-chat/myai-chat';
import { MyaiChatHistory } from '../../components/myai/myai-chat/myai-chat-history';
import { MyaiProduct } from '../../components/myai/myai-products/myai-product-card/myai-product';
import { MyaiProductResults } from '../../components/myai/myai-products/myai-product-results/myai-product-results';
import { MyaiSearch } from '../../components/myai/myai-search/myai-search';
import { ComponentTagNames, GetComponentProperties } from '../..';

export class TestHelper {
  componentName: ComponentTagNames

  constructor(compoenentTagName: ComponentTagNames) {
    this.componentName = compoenentTagName
  }

  async createPage(properties: GetComponentProperties<typeof this.componentName> = {}): Promise<SpecPage> {
    return await newSpecPage({
      components: [
        MyaiMain,
        MyaiChat,
        MyaiChatHistory,
        MyaiProduct,
        MyaiProductResults,
        MyaiSearch,
      ],
      template: () => <myai-main {...properties}/>,
    });
  };
}

