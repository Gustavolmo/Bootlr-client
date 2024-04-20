import { productState } from '../myai-products-store/product-store';
import { Role } from '../myai-search-store/search-store';
import { chatState } from './chat-store';

export const addShoppingSummaryToChatSystem = () => {
  const shoppingResultSummary = productState.shoppingResults.map(product => {
    return {
      position: product.position,
      link: product.link,
      source: product.source,
      title: product.title,
    };
  });

  chatState.messages = [
    ...chatState.messages,
    {
      role: Role.SYSTEM,
      content: `The user is looking at the following options: ${JSON.stringify(
        shoppingResultSummary,
      )}`,
    },
  ];
};
