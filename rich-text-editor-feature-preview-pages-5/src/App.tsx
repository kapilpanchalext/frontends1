import { ReactNode, cloneElement, createElement } from 'react';
import { useState, useRef, useEffect } from 'react';

const A4_HEIGHT_PX = (297 / 25.4) * 96 * 2;

function App() {
  const [scrollPosition, setScrollPosition] = useState(0);
  const contentEditableRef1 = useRef<HTMLDivElement>(null);
  const contentEditableRef2 = useRef<HTMLDivElement>(null);
  const a4HeightPx = (297 / 25.4) * 96;
  const MAX_NUMBER_OF_PAGES = 1000;
  const a4Heights = Array.from({ length: MAX_NUMBER_OF_PAGES }, (_, index) => index * a4HeightPx);
  const [parsedHtmlCharacterLength, setParsedHtmlCharacterLength] = useState<number>(0);
  const [parsedHtml, setParsedHtml] = useState<ReactNode[]>();

  // useEffect(() => {
  //   if (contentEditableRef1.current) {
  //     const htmlString = contentEditableRef1.current.innerHTML;

  //     // Create a temporary container to parse the HTML string
  //     const tempContainer = document.createElement('div');
  //     tempContainer.innerHTML = htmlString;

  //     // const elements: string[] = Array.from(tempContainer.childNodes);
  //     // setParsedHtml(elements);
  //   }
  // }, [contentEditableRef1.current?.innerHTML]);

  // useEffect(() => {
  //   if (contentEditableRef1.current) {
  //     // Convert the child nodes to an array of outerHTML strings
  //     const elements = Array.from(contentEditableRef1.current.innerText);
  //     // setParsedHtml(elements);
  //     setParsedHtmlCharacterLength(elements.length);
  //     console.log(elements.length);
  //   }
  // }, [contentEditableRef1.current?.innerHTML]);

  // useEffect(() => {
  //   if (contentEditableRef1.current) {
  //     const htmlString = contentEditableRef1.current.innerHTML;

  //     // Create a temporary container to parse the HTML string
  //     const tempContainer = document.createElement('div');
  //     tempContainer.innerHTML = htmlString;

  //     // Convert elements to their outer HTML string representation
  //     const elements = Array.from(tempContainer.childNodes).map((node: ChildNode) =>
  //       (node as HTMLElement).outerHTML
  //     );

  //     setParsedHtml(elements);
  //     console.log(elements);
  //   }
  // }, [contentEditableRef1.current?.innerHTML]);

  // useEffect(() => {
  //   if (contentEditableRef1.current) {
  //     const htmlString = contentEditableRef1.current.innerHTML;

  //     // Create a temporary container to parse the HTML string
  //     const tempContainer = document.createElement('div');
  //     tempContainer.innerHTML = htmlString;

  //     // Convert the child nodes to an array
  //     // const elements = Array.from(tempContainer.childNodes);
  //     // console.log(tempContainer.childNodes);

  //     // tempContainer.childNodes.forEach((node, index) => {
  //     //   console.log(node);
  //     // })
  //     // Update the state with the array of elements
  //     // setParsedHtml(elements);

  //     const elements: HTMLDivElement[] = Array.from(tempContainer.childNodes);
  //     console.log(elements);

  //     setParsedHtml(elements);
  //   }
  // }, [contentEditableRef1.current?.innerHTML]);

  
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
      setParsedHtmlCharacterLength(elements.length);
    }
  };

  useEffect(() => {
    if (contentEditableRef1.current) {
      setParsedHtml(parseHtmlToReact(contentEditableRef1.current.innerHTML));
    }
  }, [contentEditableRef1.current?.innerHTML]);

  const parseHtmlToReact = (htmlString: string) => {
    const template = document.createElement('template');
    template.innerHTML = htmlString.trim();
    const elements: ReactNode[] = [];
    template.content.childNodes.forEach((node, index) => {
      if (node.nodeType === Node.TEXT_NODE) {
        elements.push(node.textContent);
      } else if (node.nodeType === Node.ELEMENT_NODE) {
        elements.push(createElement((node as HTMLElement).tagName.toLowerCase(), { key: index }, (node as HTMLElement).innerHTML));
      }
    });
    return elements;
  };

  console.log(parsedHtmlCharacterLength);

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
            <fieldset style={{zoom:0.5, maxHeight: "500px", overflow: "hidden", overflowWrap: "break-word", marginBottom: "20px" }}>
              <legend>Page 1</legend>
                <div>{parsedHtml && Array.from(parsedHtml).map((node, index) => cloneElement(node, { key: index }))}</div>
            </fieldset>

            <fieldset style={{zoom:0.5, maxHeight: "500px", overflow: "hidden", overflowWrap: "break-word", marginBottom: "20px" }}>
              <legend>Page 1</legend>
                <div>{parsedHtml && Array.from(parsedHtml).map((node, index) => cloneElement(node, { key: index }))}</div>
            </fieldset>
            
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