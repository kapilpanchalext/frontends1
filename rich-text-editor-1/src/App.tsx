import './App.css'
import RichTextEditor from './components/richTextEditor/RichTextEditor';

function App() {

  return (
    <>
      {/* <div className="flex-container-row editor-content border-visible">
        <div className="flex-container-column editor-content border-visible file-explorer flex-item-1" style={{ marginRight: '5px' }}>

        </div>

        <div className="flex-container-column editor-content border-visible flex-item-8" style={{ marginLeft: '5px', padding: '5px' }}>
          <div className="flex-container-row editor-content border-visible" style={{ marginLeft: '5px' }}>
          
          </div>
          
          <div style={{ display: "flex", flexDirection: "row", height: '2px', background: '#ccc', marginLeft: '10px', marginRight: '10px' }}>
            <div style={{ height: '2px', background: '#04AA6D', width: `${50}%` }}></div>
          </div>

          <div className="flex-container-row editor-content border-visible" style={{ marginLeft: '5px', height: '100%' }}>
            <div className="editor-content border-visible flex-item-8" style={{ marginLeft: '5px' }}></div>

            <div className="editor-content border-visible" style={{ marginLeft: '5px', width: '20px' }}></div>
          </div>
        </div>
      </div> */}
      <RichTextEditor />
    </>
  )
}

export default App;