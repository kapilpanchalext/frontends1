import { ReactNode, createElement } from "react";
import log from "../../log";

type Props = {
  rawData?: string;
}

const TableOfContents = ({rawData}: Props) => {
    log("<TableOfContents /> rendered");

    const parseHtmlToReact = (htmlString: string) => {
      const template = document.createElement('template');
      template.innerHTML = htmlString.trim();
      const elements: ReactNode[] = [];

      template.content.childNodes.forEach((node, index) => {
        if (node.nodeType === Node.ELEMENT_NODE) {
          const element = node as HTMLElement;
          const tagName = element.tagName.toLowerCase();

          if (['h1', 'h2', 'h3', 'h4', 'h5', 'h6'].includes(tagName)) {
            elements.push(createElement(
                tagName,
                { 
                  key: index,
                },
                element.innerHTML
            ));
          }
        }
      });
      return elements;
    };
    const parsedHtml = rawData ? parseHtmlToReact(rawData) : null;
    // console.log(rawData);
  return (
    <div 
      style={{
      padding: '10px',
      border: '1px solid black',
      height: '600px',
      overflowY: 'auto',
      position: 'relative',
      width: '250px',
      flex: '0 0 auto',
      }}>
      <div>
        {parsedHtml && parsedHtml.map((chunk, index) => (
          <fieldset
            key={index}
            style={{ zoom: 0.75, maxHeight: '500px', overflow: 'hidden', overflowWrap: 'break-word', marginBottom: '20px' }}>
              <legend>Content {index + 1}</legend>
              <div>
                <a href={`#header-${index}`} key={index} style={{ display: 'block', marginBottom: '10px' }}>
                    {chunk}
                </a>
              </div>
          </fieldset>
        ))}
      </div>
    </div>
  )
}

export default TableOfContents;