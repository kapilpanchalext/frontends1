import { ReactNode, createElement } from 'react';
import { useState, useRef, useEffect } from 'react';

function App() {
  const [scrollPosition, setScrollPosition] = useState(0);
  const contentEditableRef1 = useRef<HTMLDivElement>(null);
  const contentEditableRef2 = useRef<HTMLDivElement>(null);
  const a4HeightPx = (297 / 25.4) * 96;
  const MAX_NUMBER_OF_PAGES = 1000;
  const a4Heights = Array.from({ length: MAX_NUMBER_OF_PAGES }, (_, index) => index * a4HeightPx);
  const [wordCount, setWordCount] = useState<number>(0);
  const [parsedHtml, setParsedHtml] = useState<ReactNode[]>();

  const handleScroll = () => {
    const element1 = contentEditableRef1.current;
    const element2 = contentEditableRef2.current;
    
    if (element1 && element2) {
      const winScroll = element1.scrollTop;
      setScrollPosition(winScroll);
      element2.scrollTop = winScroll;
    }
    if (contentEditableRef1.current) {
      const elements = Array.from(contentEditableRef1.current.innerText);
      setWordCount(elements.length);
    }
  };

  useEffect(() => {
    if (contentEditableRef1.current) {
      setParsedHtml(parseHtmlToReact(contentEditableRef1.current.innerHTML));
      const ids = contentEditableRef1.current.querySelectorAll('h1, h2, h3, h4, h5, h6');
      ids.forEach((id, index) => {
        id.setAttribute('id', `header-${index}`);
      })
    }
  }, [contentEditableRef1.current?.innerHTML]);

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

  return (
    <div className="App">
      <h1>Hello World</h1>
      <div style={{ display: "flex", flexDirection: "row", justifyContent: "center", gap: "10px" }}>
        <div 
          style={{
            padding: '10px',
            border: '1px solid black',
            height: '500px',
            overflowY: 'auto',
            position: 'relative',
            width: '200px',
            flex: '0 0 auto',
          }}>
            {/* <div>
              {parsedHtml && parsedHtml.map((chunk, index) => (
                <fieldset
                    key={index}
                    style={{ zoom: 0.5, maxHeight: '500px', overflow: 'hidden', overflowWrap: 'break-word', marginBottom: '20px' }}>
                    <legend>Content {index + 1}</legend>
                    <div>
                      <Fragment key={index}>{chunk}</Fragment>
                    </div>
                </fieldset>
              ))}
            </div> */}

          <div>
            {parsedHtml && parsedHtml.map((chunk, index) => (
              <fieldset
                  key={index}
                  style={{ zoom: 0.75, maxHeight: '500px', overflow: 'hidden', overflowWrap: 'break-word', marginBottom: '20px' }}
              >
                  <legend>Content {index + 1}</legend>
                  <div>
                    <a href={`#header-${index}`} key={index} style={{ display: 'block', marginBottom: '10px' }}>
                        {chunk}
                    </a>
                  </div>
              </fieldset>
            ))}
          </div>
            
          {/* Content for the first div */}
        </div>

        <div contentEditable={true} ref={contentEditableRef1} onScroll={handleScroll}
          style={{
            padding: '10px',
            border: '1px solid black',
            height: '500px',
            overflowY: 'auto',
            position: 'relative',
            width: '210mm',
            flex: '0 0 auto'
          }}>
          {/* Content for the first div */}
        </div>
        <div contentEditable={true} ref={contentEditableRef2} onScroll={handleScroll}
          style={{
            padding: '10px',
            border: '1px solid black',
            height: '500px',
            overflow: 'hidden',
            position: 'relative',
            width: '5mm',
            flex: '0 0 auto'
          }}>
          {a4Heights.map((height, index) => (
            <div key={index} style={{ position: 'absolute', top: `${height}px`, width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', overflow: 'hidden' }}>
              <hr className="moving-line" style={{ width: '100%' }}/>
              <h6 className="moving-line" style={{ marginTop: '1px', }}>A4</h6>
            </div>
          ))}
        </div>
      </div>
      <p>Scroll Position: {scrollPosition}px</p>
    </div>
  );
}

export default App;