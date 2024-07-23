// function App() {

//   return (
//     <>
//       <div className="row" style={{ margin: "10px", width: "calc(100% - 20px)", backgroundColor: "transparent", height: "80vh", display: "flex", flexDirection: "column", border: "1px solid black", borderRadius: "10px" }}>
//         <div className="col" style={{ display: "flex", height: "100%", flexDirection: "row" }}>
          
//           <div style={{ margin: "10px", flexGrow: 1, flexShrink: 0, backgroundColor: "transparent", display: "flex", flexDirection: "column", border: "1px solid black", borderRadius: "10px" }}>
            
//           </div>
          
//           <div className="col" style={{ width: "calc(80% - 20px)", backgroundColor: "transparent", display: "flex", flexDirection: "column", height: "100%" }}>
//             <div className="row" style={{ margin: "10px", flexShrink: 0, backgroundColor: "transparent", height: "20%", display: "flex", flexDirection: "row", border: "1px solid black", borderRadius: "10px" }}>
              
//             </div>
//             <div id="contentEditable" contentEditable={true} className="row" style={{ overflow: "auto", margin: "10px", height: "80%", backgroundColor: "transparent", border: "1px solid black", borderRadius: "10px" }}>
              
//             </div>
//           </div>

//           <div style={{ margin: "10px", width: "calc(5% - 20px)", flexShrink: 0, backgroundColor: "transparent", display: "flex", flexDirection: "column", border: "1px solid black", borderRadius: "10px" }}>
            
//           </div>
//         </div>
//       </div>
//     </>
//   )
// }

// export default App;

// import { useState, useEffect, useRef } from 'react';
// import './App.css';

// function App() {
//   const [scrollProgress, setScrollProgress] = useState(0);
//   const contentEditableRef = useRef(null);
//   const [scrollPosition, setScrollPosition] = useState(0);
//   const [a4Heights, setA4Heights] = useState<number[]>([]);
//   const contentEditableRef1 = useRef(null);
//   const contentEditableRef2 = useRef(null);
//   const a4HeightPx = (297 / 25.4) * 96;

//   useEffect(() => {
//     if (contentEditableRef.current) {
//       const totalHeight = contentEditableRef.current.scrollHeight;
//       const heights = [];
//       for (let i = 0; i < totalHeight; i += a4HeightPx) {
//         heights.push(i);
//       }
//       setA4Heights(heights);
//     }
//   }, [a4HeightPx, contentEditableRef.current?.scrollHeight]);

//   const handleScroll = () => {
//     const element = contentEditableRef.current;
//     const winScroll = element.scrollTop;
//     const height = element.scrollHeight - element.clientHeight;
//     const scrolled = (winScroll / height) * 100;
//     const element1 = contentEditableRef1.current;
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
//             <div id="contentEditable" ref={contentEditableRef} contentEditable={true} className="row" style={{ overflow: "auto", margin: "10px", height: "80%", backgroundColor: "transparent", border: "1px solid black", borderRadius: "10px", flexGrow: 1 }}></div>
            
//           </div>

//           <div className='App' style={{ margin: "10px", width: "calc(5% - 20px)", flexShrink: 0, backgroundColor: "transparent", display: "flex", flexDirection: "column", border: "1px solid black", borderRadius: "10px" }}>
//             {a4Heights.map((height, index) => (
//               <div key={index} style={{ position: 'absolute', top: `${height}px`, width: '100%' }}>
//                 <h6 className="moving-line">A4</h6>
//                 <hr className="moving-line" />
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//       <p>Scroll Position: {scrollPosition}px</p>
//     </>
//   );
// }

// export default App;



import React, { useState, useRef } from 'react';

function App() {
  const [scrollPosition, setScrollPosition] = useState(0);
  const contentEditableRef1 = useRef(null);
  const contentEditableRef2 = useRef(null);
  const a4Heights = Array.from({ length: 10 }, (_, index) => index * 500); // Example heights

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
            border: '1px solid black',
            height: '500px',
            overflowY: 'auto',
            position: 'relative',
            width: '50mm',
            flex: '0 0 auto'
          }}
        >
          {a4Heights.map((height, index) => (
            <div key={index} style={{ position: 'absolute', top: `${height}px`, width: '100%' }}>
              <h6 className="moving-line">A4</h6>
              <hr className="moving-line" />
            </div>
          ))}
        </div>
      </div>
      <p>Scroll Position: {scrollPosition}px</p>
    </div>
  );
}

export default App;