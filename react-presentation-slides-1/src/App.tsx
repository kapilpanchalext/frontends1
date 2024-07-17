
function App() {

  return (
    <>
      <div style={{ margin: "10px", width: "calc(100% - 20px)", backgroundColor: "gray", height: "95vh", display: "flex", flexDirection: "column", border: "1px solid black" }}>
        <h1>React Presentation Slides</h1>
        <div contentEditable={true} style={{ width: "100%", height: "100%", backgroundColor: "white", border: "1px solid black" }}></div>
      </div>
    </>
  )
}

export default App;