import { createStore } from '@stencil/store';

export interface Product {
  product_id?: string;
  product_title?: string;
  product_description?: string;
  product_photos?: string[];
  product_attributes?: any | null;
  product_rating?: number;
  product_page_url?: string;
  product_offers_page_url?: string;
  product_specs_page_url?: string;
  product_reviews_page_url?: string;
  product_num_reviews?: number;
  product_num_offers?: string;
  typical_price_range?: string[];
  offer?: Offer;
}

interface Offer {
  store_name?: string;
  store_rating?: number;
  offer_page_url?: string;
  store_review_count?: number;
  store_reviews_page_url?: string;
  price?: string;
  shipping?: string;
  tax?: string;
  on_sale?: boolean;
  original_price?: string | null;
  product_condition?: string;
  top_quality_store?: boolean,
}

interface productStore {
  isResultEmpty: boolean;
  shoppingResults: Product[];
}

export const productStore = createStore<productStore>({
  isResultEmpty: false,
  shoppingResults: [],
});

export const { state: productState } = productStore;
