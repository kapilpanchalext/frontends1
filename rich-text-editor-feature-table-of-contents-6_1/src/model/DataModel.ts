export interface ForwardRichTextData {
    getRichTextRefData: () => HTMLDivElement | null;
    getScrollHeight: () => number;
    getScrollTop: () => number;
    getClientHeight: () => number;
    getQuerySelectorAll: (selectors: string) => NodeListOf<Element>;
}