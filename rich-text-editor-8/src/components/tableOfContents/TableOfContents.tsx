import { ReactElement, ReactNode, createElement, isValidElement } from "react";

type Props = {
  rawData?: string;
}

const TagDisplayNameMap: { [key: string]: string } = {
  h1: "Title",
  h2: "Subtitle",
  h3: "Heading 1",
  h4: "Heading 2",
  h5: "Sub Heading 1",
  h6: "Sub Heading 2",
  div: "Section",
};

const TableOfContents = ({rawData}: Props) => {

  const parseHtmlToReact = (htmlString: string): ReactNode[] => {
    const template = document.createElement('template');
    template.innerHTML = htmlString.trim();
    const elements: ReactNode[] = [];

    const processNode = (node: Node, index: number): ReactNode | null => {
      if (node.nodeType === Node.ELEMENT_NODE) {
        const element = node as HTMLElement;
        const tagName = element.tagName.toLowerCase();

        if (['h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'div'].includes(tagName)) {
          return createElement(tagName, { key: index },
            Array.from(element.childNodes).map((child, childIndex) => processNode(child, childIndex))
          );
        }
      } else if (node.nodeType === Node.TEXT_NODE) {
        return node.textContent;
      }
      return null;
    };

    Array.from(template.content.childNodes).forEach((node, index) => {
      const processedNode = processNode(node, index);

      if (processedNode && isReactElementWithChildren(processedNode)) {
        elements.push(processedNode);
      }
    });

    return elements;
  };

  function isReactElementWithChildren(node: ReactNode): node is ReactElement {
    if (isValidElement(node)) {
      if (node?.props.children && node?.props.children[0] !== null) {
        return true;
      }
    }
    return false;
  }

  const parsedHtml = rawData ? parseHtmlToReact(rawData) : null;

  return (
    <>
      <div>
        {parsedHtml && parsedHtml.map((chunk, index) => (
          <fieldset
            key={index}
            style={{ zoom: 0.75, maxHeight: '500px', overflow: 'hidden', overflowWrap: 'break-word', marginBottom: '20px' }}>
              <legend> {isValidElement(chunk) && typeof chunk.type === 'string' ? TagDisplayNameMap[chunk.type] : 'Unknown'}</legend>
              <div>
                <a href={`#header-${index}`} key={index} style={{ display: 'block', marginBottom: '10px' }}>
                    {chunk}
                </a>
              </div>
          </fieldset>
        ))}
      </div>
    </>
  )
}

export default TableOfContents;