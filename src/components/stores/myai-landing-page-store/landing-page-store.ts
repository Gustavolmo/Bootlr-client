import { createStore } from "@stencil/store";
import { processTrendingItems } from "./landing-page-helper";

interface LandingPageStore {
  isFirstLoad: boolean
  processTrendingItems: () => void
}

export const landingPageStore = createStore<LandingPageStore>({
  isFirstLoad: true,
  processTrendingItems: processTrendingItems
});

export const { state: landingPageState } = landingPageStore;
