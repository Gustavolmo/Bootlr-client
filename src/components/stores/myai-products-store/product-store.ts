import { createStore } from '@stencil/store';

export interface Product {
  badge?: string;
  comparison_link?: string;
  delivery?: string;
  extensions?: string[];
  extracted_old_price?: number;
  extracted_price?: number;
  link?: string;
  number_of_comparisons?: string;
  old_price?: string;
  position?: number;
  price?: string;
  product_id?: string;
  product_link?: string;
  reviews?: number;
  rating?: number;
  second_hand_condition?: string;
  serpapi_product_api?: string;
  serpapi_product_api_comparisons?: string;
  source?: string;
  store_rating?: number;
  store_reviews?: number;
  tag?: string;
  thumbnail?: string;
  title?: string;
}

interface productStore {
  shoppingResults: Product[];
}

export const { state: productState } = createStore<productStore>({
  shoppingResults: []
});
