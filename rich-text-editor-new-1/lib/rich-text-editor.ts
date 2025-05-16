// lib/useRichTextEditor.ts
export function useRichTextEditor() {
  const getSelectionRange = 
  () => {
    const selection = window.getSelection();
    return selection?.rangeCount ? selection.getRangeAt(0) : null;
  };

  const stripTags = (element: HTMLElement, tags: string[]) => {
    tags.forEach(tag => {
      element.querySelectorAll(tag).forEach(node => {
        const parent = node.parentNode;
        while (node.firstChild) parent?.insertBefore(node.firstChild, node);
        parent?.removeChild(node);
      });
    });
  };

  const format = (tag: keyof HTMLElementTagNameMap) => {
    const range = getSelectionRange();
    if (!range) {
      return;
    }

    const content = range.extractContents();
    const temp = document.createElement('div');
    temp.appendChild(content);
    stripTags(temp, [tag]);

    const wrapper = document.createElement(tag);
    wrapper.append(...temp.childNodes);
    range.insertNode(wrapper);

    const selection = window.getSelection();
    selection?.removeAllRanges();
    const newRange = document.createRange();
    newRange.selectNodeContents(wrapper);
    selection?.addRange(newRange);
  };

  const align = (alignment: 'left' | 'center' | 'right') => {
    const range = getSelectionRange();
    if (!range) return;

    const content = range.extractContents();
    const temp = document.createElement('div');
    temp.appendChild(content);
    stripTags(temp, ['div']);

    const wrapper = document.createElement('div');
    wrapper.style.textAlign = alignment;
    wrapper.append(...temp.childNodes);
    range.insertNode(wrapper);

    const selection = window.getSelection();
    selection?.removeAllRanges();
    const newRange = document.createRange();
    newRange.selectNodeContents(wrapper);
    selection?.addRange(newRange);
  };

  return {
    format,
    align,
    normal: () => format('div'),
    h1: () => format('h1'),
    bold: () => format('strong'),
    italic: () => format('em'),
    underline: () => format('u'),
    highlight: () => format('mark'),
    code: () => format('code'),
    kbd: () => format('kbd'),
    blockquote: () => format('blockquote'),
    paragraph: () => format('p'),
    clearFormat: () => stripTags(getSelectionRange()?.commonAncestorContainer as HTMLElement, ['strong', 'em', 'u', 'mark', 'code', 'kbd', 'blockquote']),
    alignLeft: () => align('left'),
    alignCenter: () => align('center'),
    alignRight: () => align('right'),
  };
}