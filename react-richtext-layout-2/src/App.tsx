
function App() {

  return (
  <>
  <div className="row" style={{ margin: "10px", width: "calc(100% - 20px)", backgroundColor: "transparent", height: "80vh", display: "flex", flexDirection: "column", border: "1px solid black", borderRadius: "10px" }}>
    <div className="col" style={{ display: "flex", height: "100%", flexDirection: "row" }}>
      
      <div style={{ margin: "10px", flexGrow: 1, flexShrink: 0, backgroundColor: "transparent", display: "flex", flexDirection: "column", border: "1px solid black", borderRadius: "10px" }}>
        
      </div>
      
      <div className="col" style={{ width: "calc(80% - 20px)", backgroundColor: "transparent", display: "flex", flexDirection: "column", height: "100%" }}>
        <div className="row" style={{ margin: "10px", flexShrink: 0, backgroundColor: "transparent", height: "20%", display: "flex", flexDirection: "row", border: "1px solid black", borderRadius: "10px" }}>
          
        </div>
        <div id="contentEditable" contentEditable={true} className="row" style={{ overflow: "auto", margin: "10px", height: "80%", backgroundColor: "transparent", border: "1px solid black", borderRadius: "10px" }}>
          
        </div>
      </div>

      <div style={{ margin: "10px", width: "calc(5% - 20px)", flexShrink: 0, backgroundColor: "transparent", display: "flex", flexDirection: "column", border: "1px solid black", borderRadius: "10px" }}>
        
      </div>
    </div>
  </div>
</>
  )
}

export default App;