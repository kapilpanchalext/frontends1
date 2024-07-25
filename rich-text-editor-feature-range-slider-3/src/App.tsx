import { useState } from 'react';
import './App.css';

function App() {

  const [zoomValue, setZoomValue] = useState<number>(100);

  const onZoomValueChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setZoomValue(Number(event.target.value));
  }

  return (
    <>
      <h1>Custom Range Slider</h1>
        <div style={{ margin: "10px", padding: "10px", width: "150px", height: "50px", display: "flex", flexDirection: "row", border: "1px solid black", alignItems: "center", justifyContent: "center" }}>
          <p>-</p>
          <input type="range" min="50" value={zoomValue} max="200" onChange={onZoomValueChange} className="slider" id="myRange"></input>
          <p>+</p>
        </div>
      <div>Zoom Value: {zoomValue}</div>
    </>
  )
}

export default App;