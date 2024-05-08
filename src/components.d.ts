/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "@stencil/core/internal";
import { Product } from "./components/stores/myai-products-store/product-store";
export { Product } from "./components/stores/myai-products-store/product-store";
export namespace Components {
    interface MyaiAds {
    }
    interface MyaiChat {
    }
    interface MyaiChatArea {
    }
    interface MyaiChatHistory {
    }
    interface MyaiError {
    }
    interface MyaiFooter {
    }
    interface MyaiMain {
    }
    interface MyaiProduct {
        "inFocus": boolean;
        "product": Product;
    }
    interface MyaiProductResults {
    }
    interface MyaiSearch {
    }
    interface MyaiSearchExamples {
    }
    interface MyaiTrendingProducts {
        "productSelection": Product[];
        "sectionTitle": string;
    }
}
declare global {
    interface HTMLMyaiAdsElement extends Components.MyaiAds, HTMLStencilElement {
    }
    var HTMLMyaiAdsElement: {
        prototype: HTMLMyaiAdsElement;
        new (): HTMLMyaiAdsElement;
    };
    interface HTMLMyaiChatElement extends Components.MyaiChat, HTMLStencilElement {
    }
    var HTMLMyaiChatElement: {
        prototype: HTMLMyaiChatElement;
        new (): HTMLMyaiChatElement;
    };
    interface HTMLMyaiChatAreaElement extends Components.MyaiChatArea, HTMLStencilElement {
    }
    var HTMLMyaiChatAreaElement: {
        prototype: HTMLMyaiChatAreaElement;
        new (): HTMLMyaiChatAreaElement;
    };
    interface HTMLMyaiChatHistoryElement extends Components.MyaiChatHistory, HTMLStencilElement {
    }
    var HTMLMyaiChatHistoryElement: {
        prototype: HTMLMyaiChatHistoryElement;
        new (): HTMLMyaiChatHistoryElement;
    };
    interface HTMLMyaiErrorElement extends Components.MyaiError, HTMLStencilElement {
    }
    var HTMLMyaiErrorElement: {
        prototype: HTMLMyaiErrorElement;
        new (): HTMLMyaiErrorElement;
    };
    interface HTMLMyaiFooterElement extends Components.MyaiFooter, HTMLStencilElement {
    }
    var HTMLMyaiFooterElement: {
        prototype: HTMLMyaiFooterElement;
        new (): HTMLMyaiFooterElement;
    };
    interface HTMLMyaiMainElement extends Components.MyaiMain, HTMLStencilElement {
    }
    var HTMLMyaiMainElement: {
        prototype: HTMLMyaiMainElement;
        new (): HTMLMyaiMainElement;
    };
    interface HTMLMyaiProductElement extends Components.MyaiProduct, HTMLStencilElement {
    }
    var HTMLMyaiProductElement: {
        prototype: HTMLMyaiProductElement;
        new (): HTMLMyaiProductElement;
    };
    interface HTMLMyaiProductResultsElement extends Components.MyaiProductResults, HTMLStencilElement {
    }
    var HTMLMyaiProductResultsElement: {
        prototype: HTMLMyaiProductResultsElement;
        new (): HTMLMyaiProductResultsElement;
    };
    interface HTMLMyaiSearchElement extends Components.MyaiSearch, HTMLStencilElement {
    }
    var HTMLMyaiSearchElement: {
        prototype: HTMLMyaiSearchElement;
        new (): HTMLMyaiSearchElement;
    };
    interface HTMLMyaiSearchExamplesElement extends Components.MyaiSearchExamples, HTMLStencilElement {
    }
    var HTMLMyaiSearchExamplesElement: {
        prototype: HTMLMyaiSearchExamplesElement;
        new (): HTMLMyaiSearchExamplesElement;
    };
    interface HTMLMyaiTrendingProductsElement extends Components.MyaiTrendingProducts, HTMLStencilElement {
    }
    var HTMLMyaiTrendingProductsElement: {
        prototype: HTMLMyaiTrendingProductsElement;
        new (): HTMLMyaiTrendingProductsElement;
    };
    interface HTMLElementTagNameMap {
        "myai-ads": HTMLMyaiAdsElement;
        "myai-chat": HTMLMyaiChatElement;
        "myai-chat-area": HTMLMyaiChatAreaElement;
        "myai-chat-history": HTMLMyaiChatHistoryElement;
        "myai-error": HTMLMyaiErrorElement;
        "myai-footer": HTMLMyaiFooterElement;
        "myai-main": HTMLMyaiMainElement;
        "myai-product": HTMLMyaiProductElement;
        "myai-product-results": HTMLMyaiProductResultsElement;
        "myai-search": HTMLMyaiSearchElement;
        "myai-search-examples": HTMLMyaiSearchExamplesElement;
        "myai-trending-products": HTMLMyaiTrendingProductsElement;
    }
}
declare namespace LocalJSX {
    interface MyaiAds {
    }
    interface MyaiChat {
    }
    interface MyaiChatArea {
    }
    interface MyaiChatHistory {
    }
    interface MyaiError {
    }
    interface MyaiFooter {
    }
    interface MyaiMain {
    }
    interface MyaiProduct {
        "inFocus"?: boolean;
        "product"?: Product;
    }
    interface MyaiProductResults {
    }
    interface MyaiSearch {
    }
    interface MyaiSearchExamples {
    }
    interface MyaiTrendingProducts {
        "productSelection"?: Product[];
        "sectionTitle"?: string;
    }
    interface IntrinsicElements {
        "myai-ads": MyaiAds;
        "myai-chat": MyaiChat;
        "myai-chat-area": MyaiChatArea;
        "myai-chat-history": MyaiChatHistory;
        "myai-error": MyaiError;
        "myai-footer": MyaiFooter;
        "myai-main": MyaiMain;
        "myai-product": MyaiProduct;
        "myai-product-results": MyaiProductResults;
        "myai-search": MyaiSearch;
        "myai-search-examples": MyaiSearchExamples;
        "myai-trending-products": MyaiTrendingProducts;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "myai-ads": LocalJSX.MyaiAds & JSXBase.HTMLAttributes<HTMLMyaiAdsElement>;
            "myai-chat": LocalJSX.MyaiChat & JSXBase.HTMLAttributes<HTMLMyaiChatElement>;
            "myai-chat-area": LocalJSX.MyaiChatArea & JSXBase.HTMLAttributes<HTMLMyaiChatAreaElement>;
            "myai-chat-history": LocalJSX.MyaiChatHistory & JSXBase.HTMLAttributes<HTMLMyaiChatHistoryElement>;
            "myai-error": LocalJSX.MyaiError & JSXBase.HTMLAttributes<HTMLMyaiErrorElement>;
            "myai-footer": LocalJSX.MyaiFooter & JSXBase.HTMLAttributes<HTMLMyaiFooterElement>;
            "myai-main": LocalJSX.MyaiMain & JSXBase.HTMLAttributes<HTMLMyaiMainElement>;
            "myai-product": LocalJSX.MyaiProduct & JSXBase.HTMLAttributes<HTMLMyaiProductElement>;
            "myai-product-results": LocalJSX.MyaiProductResults & JSXBase.HTMLAttributes<HTMLMyaiProductResultsElement>;
            "myai-search": LocalJSX.MyaiSearch & JSXBase.HTMLAttributes<HTMLMyaiSearchElement>;
            "myai-search-examples": LocalJSX.MyaiSearchExamples & JSXBase.HTMLAttributes<HTMLMyaiSearchExamplesElement>;
            "myai-trending-products": LocalJSX.MyaiTrendingProducts & JSXBase.HTMLAttributes<HTMLMyaiTrendingProductsElement>;
        }
    }
}
