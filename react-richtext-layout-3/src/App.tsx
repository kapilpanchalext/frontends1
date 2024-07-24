import { useState,  useRef } from 'react';
import './App.css';

// function App() {
//   const [scrollProgress, setScrollProgress] = useState(0);
//   const contentEditableRef = useRef(null);
//   const contentEditableRef2 = useRef(null);
//   const [scrollPosition, setScrollPosition] = useState(0);
//   // const [a4HeightsState, setA4HeightsState] = useState<number[]>([]);
//   const a4HeightPx = (297 / 25.4) * 96;
//   const MAX_NUMBER_OF_PAGES = 1000;
//   const a4Heights = Array.from({ length: MAX_NUMBER_OF_PAGES }, (_, index) => index * a4HeightPx);

//   useEffect(() => {
//     if (contentEditableRef.current) {
//       const totalHeight = contentEditableRef.current.scrollHeight;
//       const heights = [];
//       for (let i = 0; i < totalHeight; i += a4HeightPx) {
//         heights.push(i);
//       }
//       // setA4HeightsState(heights);
//     }
//   }, [a4HeightPx, contentEditableRef.current?.scrollHeight]);

//   const handleScroll = () => {
//     const element = contentEditableRef.current;
//     const winScroll = element.scrollTop;
//     const height = element.scrollHeight - element.clientHeight;
//     const scrolled = (winScroll / height) * 100;
//     const element1 = contentEditableRef.current;
//     const element2 = contentEditableRef2.current;

//     setScrollProgress(scrolled);
    
//     if (element1 && element2) {
//       const winScroll = element1.scrollTop;
//       setScrollPosition(winScroll);
//       element2.scrollTop = winScroll;
//     }

//     if (contentEditableRef.current) {
//       setScrollPosition(contentEditableRef.current.scrollTop);
//     }
//   };

//   const handleVerticalScroll = () => {
//     const element1 = contentEditableRef.current;
//     const element2 = contentEditableRef2.current;
//     if (element1 && element2) {
//       const winScroll = element1.scrollTop;
//       setScrollPosition(winScroll);
//       element2.scrollTop = winScroll;
//     }
//   };

//   useEffect(() => {
//     if (contentEditableRef.current) {
//       const totalHeight = contentEditableRef.current.scrollHeight;
//       const heights = [];
//       for (let i = 0; i < totalHeight; i += a4HeightPx) {
//         heights.push(i);
//       }
//       // setA4Heights(heights);
//     }
//   }, [a4HeightPx, contentEditableRef.current?.scrollHeight]);

//   useEffect(() => {
//     const element = contentEditableRef.current;
//     element.addEventListener('scroll', handleScroll);
//     return () => element.removeEventListener('scroll', handleScroll);
//   }, []);

//   return (
//     <>
//       <div className="row" style={{ margin: "10px", width: "calc(100% - 20px)", backgroundColor: "transparent", height: "80vh", display: "flex", flexDirection: "column", border: "1px solid black", borderRadius: "10px" }}>
//         <div className="col" style={{ display: "flex", height: "100%", flexDirection: "row" }}>
          
//           <div style={{ margin: "10px", flexGrow: 1, flexShrink: 0, backgroundColor: "transparent", display: "flex", flexDirection: "column", border: "1px solid black", borderRadius: "10px" }}>
            
//           </div>
          
//           <div className="col" style={{ width: "calc(80% - 20px)", backgroundColor: "transparent", display: "flex", flexDirection: "column", height: "100%" }}>
//             <div className="row" style={{ margin: "10px", flexShrink: 0, backgroundColor: "transparent", height: "20%", display: "flex", flexDirection: "row", border: "1px solid black", borderRadius: "10px" }}>
              
//             </div>
            
//             <div style={{marginLeft: '10px', marginRight: '10px', height: '2px', background: '#ccc', marginTop: '10px' }}>
//               <div style={{ height: '2px', background: '#04AA6D', width: `${scrollProgress}%` }}></div>
//             </div>
//             <div id="contentEditable" onScroll={handleVerticalScroll} ref={contentEditableRef} contentEditable={true} className="row" style={{ overflow: "auto", margin: "10px", height: "80%", backgroundColor: "transparent", border: "1px solid black", borderRadius: "10px", flexGrow: 1 }}></div>
            
//           </div>

//           {/* <div className='App' ref={contentEditableRef2} onScroll={handleVerticalScroll} style={{ margin: "10px", width: "50px", flexShrink: 0, backgroundColor: "transparent", display: "flex", flexDirection: "column", border: "1px solid black", borderRadius: "10px" }}> */}
//               <div
//                 className='App'
//                 contentEditable
//                 ref={contentEditableRef2}
//                 onScroll={handleVerticalScroll}
//                 style={{ margin: "10px", width: "50px", flexShrink: 0, backgroundColor: "transparent", display: "flex", flexDirection: "column", border: "1px solid black", borderRadius: "10px" }}
//                 >
//               {a4Heights.map((height, index) => (
//                 <div key={index} style={{ position: 'absolute', top: `${height}px`, width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', overflow: 'hidden' }}>
//                   <hr className="moving-line" style={{ width: '100%' }}/>
//                   <h6 className="moving-line" style={{ marginTop: '1px', }}>A4</h6>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>
//       <p>Scroll Position: {scrollPosition} px</p>
//     </>
//   );
// }

// export default App;

function App() {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [scrollPosition, setScrollPosition] = useState(0);
  const contentEditableRef = useRef(null);
  const contentEditableRef2 = useRef(null);
  const a4HeightPx = (297 / 25.4) * 96;
  const MAX_NUMBER_OF_PAGES = 1000;
  const a4Heights = Array.from({ length: MAX_NUMBER_OF_PAGES }, (_, index) => index * a4HeightPx);
  
  console.log(JSON.stringify(a4Heights));
  
  const handleScroll = () => {
    const element1 = contentEditableRef.current;
    const element2 = contentEditableRef2.current;
    const winScroll = element1?.scrollTop;
    const height = element1?.scrollHeight - element1?.clientHeight;
    const scrolled = (winScroll / height) * 100;
    if (element1 && element2) {
      const winScroll = element1.scrollTop;
      setScrollPosition(winScroll);
      setScrollProgress(scrolled);
      element2.scrollTop = winScroll;
    }
  };

  return (
    <>
      <div className="row" style={{ margin: "10px", width: "calc(100% - 20px)", backgroundColor: "transparent", height: "80vh", display: "flex", flexDirection: "column", border: "1px solid black", borderRadius: "10px" }}>
        <div className="col" style={{ display: "flex", height: "100%", flexDirection: "row" }}>
          <div style={{ margin: "10px", flexGrow: 1, flexShrink: 0, backgroundColor: "transparent", display: "flex", flexDirection: "column", border: "1px solid black", borderRadius: "10px" }}></div>
          
          <div className="col" style={{ width: "calc(85% - 20px)", backgroundColor: "transparent", display: "flex", flexDirection: "column", height: "100%" }}> 
          
            <div className="row" style={{ margin: "10px", flexShrink: 0, backgroundColor: "transparent", height: "20%", display: "flex", flexDirection: "row", border: "1px solid black", borderRadius: "10px" }}>Button Div</div>
    
            <div style={{display: "flex", flexDirection: "column" }}>
              <div style={{display: "flex", flexDirection: "row", height: '2px', background: '#ccc', marginLeft: '10px', marginRight: '10px' }}>
                <div style={{ height: '2px', background: '#04AA6D', width: `${scrollProgress}%` }}></div>
              </div>
            
              <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", gap: "10px" }}>
                <div contentEditable ref={contentEditableRef} onScroll={handleScroll}
                  style={{ border: '1px solid black', height: '500px', overflowY: 'auto', position: 'relative', flexGrow: 1, borderRadius: "10px", margin: "10px" }}
                >
                </div>

                <div
                  ref={contentEditableRef2}
                  onScroll={handleScroll}
                  style={{
                    border: '1px solid black',
                    height: '500px',
                    overflowY: 'hidden',
                    position: 'relative',
                    width: '10mm',
                    flex: '0 0 auto',
                    margin: "10px",
                    borderRadius: "10px",
                  }}>
                  {a4Heights.map((height, index) => (
                    <div key={index} style={{ position: 'absolute', top: `${height}px`, width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', overflow: 'hidden' }}>
                      <hr className="moving-line" style={{ width: '100%' }}/>
                      <h6 className="moving-line" style={{ marginTop: '1px', }}>A4</h6>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <p>Scroll Position: {scrollPosition}px</p>

    {/* <div className="flex-container-column" style={{ border: "1px solid black", borderRadius: "10px" }}>
        <div className="flex-container-row" style={{ border: "1px solid black", borderRadius: "10px" }}>
          <div className="flex-item flex-item-1" style={{ border: "1px solid black", borderRadius: "10px" }}>1</div>
          <div className="flex-item flex-item-2" style={{ border: "1px solid black", borderRadius: "10px" }}>2</div>
          <div className="flex-item" style={{ border: "1px solid black", borderRadius: "10px" }}>3</div>
          <div className="flex-item flex-item-1" style={{ border: "1px solid black", borderRadius: "10px" }}>4</div>        
        </div>
        <div className="flex-container-column" style={{ border: "1px solid black", borderRadius: "10px" }}>
          <div className="flex-container-row" style={{ border: "1px solid black", borderRadius: "10px" }}>
            <div className="flex-item flex-item-1" style={{ border: "1px solid black", borderRadius: "10px" }}>7</div>
            <div className="flex-item flex-item-2" style={{ border: "1px solid black", borderRadius: "10px" }}>8</div>
            <div className="flex-item flex-item-3" style={{ border: "1px solid black", borderRadius: "10px" }}>9</div>        
          </div>
          <div className="flex-item flex-item-1" style={{ border: "1px solid black", borderRadius: "10px" }}>4</div>
          <div className="flex-item flex-item-2" style={{ border: "1px solid black", borderRadius: "10px" }}>5</div>
          <div className="flex-item flex-item-3" style={{ border: "1px solid black", borderRadius: "10px" }}>6</div>
        </div>
      </div> */}
    </>
  );
}

export default App;