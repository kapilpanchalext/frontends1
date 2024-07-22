import { useState } from "react";
import './App.css';

function App() {
  const [percentage, setPercentage] = useState(50);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = Math.max(0, Math.min(100, Number(e.target.value)));
    setPercentage(value);
  };

  return (
    <div className="App">
      <h1>Hello World</h1>
      <div className="moving-container" style={{ top: `${percentage}%` }}>
          <h6 className="moving-line"> A4 </h6>
          <hr className="moving-line" />
      </div>
      <input
        type="number"
        value={percentage}
        onChange={handleInputChange}
        min="0"
        max="100"
        style={{ marginTop: '20px' }}
      />
      <p>Color percentage: {percentage}%</p>
    </div>
  )
}

export default App;