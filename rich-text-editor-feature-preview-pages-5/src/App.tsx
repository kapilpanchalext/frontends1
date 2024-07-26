import { useState, useRef, useEffect } from 'react';

function App() {
  const [scrollPosition, setScrollPosition] = useState(0);
  const contentEditableRef1 = useRef(null);
  const contentEditableRef2 = useRef(null);
  const a4HeightPx = (297 / 25.4) * 96;
  const MAX_NUMBER_OF_PAGES = 1000;
  const a4Heights = Array.from({ length: MAX_NUMBER_OF_PAGES }, (_, index) => index * a4HeightPx);
  
  console.log(JSON.stringify(a4Heights));
  
  const handleScroll = () => {
    const element1 = contentEditableRef1.current;
    const element2 = contentEditableRef2.current;
    if (element1 && element2) {
      const winScroll = element1.scrollTop;
      setScrollPosition(winScroll);
      element2.scrollTop = winScroll;
    }
  };

  return (
    <div className="App">
      <h1>Hello World</h1>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          gap: "10px",
        }}
      >
        <div
          contentEditable
          ref={contentEditableRef1}
          onScroll={handleScroll}
          style={{
            padding: '10px',
            border: '1px solid black',
            height: '500px',
            overflowY: 'auto',
            position: 'relative',
            width: '210mm',
            flex: '0 0 auto'
          }}
        >
          {/* Content for the first div */}
        </div>
        <div
          contentEditable
          ref={contentEditableRef2}
          onScroll={handleScroll}
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