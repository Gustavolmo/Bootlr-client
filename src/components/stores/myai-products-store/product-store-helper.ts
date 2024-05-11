import { productState } from "./product-store";

export const populateProductsInFocus = (productReference: string[]) => {
  if (!productReference) return;

  productState.productsInFocus.length = 0;

  const matchedProducts = productState.shoppingResults.filter(product => {
    return productReference.some(reference => product.product_title.includes(reference));
  });

  if(!matchedProducts) return;

  const uniqueProducts = matchedProducts.filter((match, index, self) => {
    return self.findIndex(obj => obj.product_id === match.product_id) === index;
  });

  productState.productsInFocus = uniqueProducts;
};