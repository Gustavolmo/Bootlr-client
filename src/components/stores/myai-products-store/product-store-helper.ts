import { productState } from "./product-store";

export const populateProductsInFocus = (productReference: string[]) => {
  if (!productReference) return;

  productState.productsInFocus.length = 0;

  const matchedProducts = productState.shoppingResults.filter(product => {
    return productReference.some(reference => product.title.includes(reference));
  });

  if(!matchedProducts) return;

  const uniqueProducts = matchedProducts.filter((match, index, self) => {
    return self.findIndex(obj => obj.position === match.position) === index;
  });

  productState.productsInFocus = uniqueProducts;
};