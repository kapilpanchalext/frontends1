import { useState, useRef } from "react";
import { CMD, CMD_MAP } from "./utils/Commands";
import "./App.css";
import useFloatingToolbar from "./hooks/floatingtoolbar/useFloatingToolbar";
import { FONT_SIZE_MAP, FontNames, FontSize } from "./utils/FontNames";
import ContentEditable from "./components/contenteditable/ContentEditable";

function App() {
  const [showColorPicker, setShowColorPicker] = useState<boolean>(false);
  const [fontColor, setFontColor] = useState<boolean>(false);
  const draggableRef = useRef<HTMLDivElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  useFloatingToolbar({ draggableRef, closeButtonRef, showColorPicker });

  const colorPickerCloseHandler = () => {
    if(fontColor){
      documentExecCommand(CMD.FORECOLOR, false, '#0000ff');
    } else {
      documentExecCommand(CMD.BACKCOLOR, false, '#fcfc03');
    }
    setShowColorPicker(false);
  }

  const handleColorChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if(fontColor){
      documentExecCommand(CMD.FORECOLOR, false, event.target.value);
    } else {
      documentExecCommand(CMD.BACKCOLOR, false, event.target.value);
    }
  };

  const documentExecCommand = (command: string, showUI: boolean = false, value: string = "") => {    
    document.execCommand(command, showUI, value);
  }

  const applyExecCommandHandler = (command: string, value: string = "") => {
    if(command === CMD.BACKCOLOR) {
      setFontColor(false);
      setShowColorPicker(true);
      return;
    }
    else if(command === CMD.FORECOLOR) {
      setFontColor(true);
      setShowColorPicker(true);
      return;
    }
    else if(command === CMD.CREATE_LINK) {
      const url = prompt("Enter a valid URL");
      if (url) {
        documentExecCommand(command, false, url);
      }
      return;
    } 
    else if (command === CMD.INSERT_IMAGE) {
      const url = prompt("Enter the Image URL");
      if (url) {
        const width = prompt("Enter the Image Width (optional)");
        const height = prompt("Enter the Image Height (optional)");
        const widthAttr = width ? ` width="${width}"` : '';
        const heightAttr = height ? ` height="${height}"` : '';
        const imageHTML = `<img src="${url}"${widthAttr}${heightAttr} />`;
        documentExecCommand(CMD.INSERT_HTML, false, imageHTML);
      }
      return;
    }
    else if (command === CMD.FONTSIZE) {
      const mappedValue = FONT_SIZE_MAP.get(Number(value));
      documentExecCommand(command, false, mappedValue?.toString());
      return;
    }
    else if (command === CMD.INSERT_TEXT) {
      const defaultText = " [" + new Date().toLocaleString() + "]";
      const insertText = prompt("Enter text...", defaultText);
      if (insertText) {
        documentExecCommand(CMD.INSERT_TEXT, false, insertText);
      }
      return;
    }
    documentExecCommand(command, false, value);
  }

  return (
    <>
      <div style={{backgroundColor:"#e3e3e3", margin: "0", height: "100vh", overflow: "hidden"}}>
        <h1>
          Custom Hooks 2!
        </h1>

        {/* <div ref={draggableRef} style={{ backgroundColor: 'transparent', position: 'absolute', top: '20%', left: '50%', justifyContent: 'center', alignItems: 'center' }}> */}
          {Array.from(CMD_MAP.entries()).map(([key, cmd]) => {
            let inputTypes;
            if(key === CMD.FONTNAME) {
              inputTypes = <select key={key} onChange={(event: React.ChangeEvent<HTMLSelectElement>) => applyExecCommandHandler(key, event.target.value)}>{FontNames.map((font) =><option key={font} value={font}>{font}</option>)}</select>
            } else if(key === CMD.FONTSIZE){
              inputTypes = <select key={key} onChange={(event: React.ChangeEvent<HTMLSelectElement>) => applyExecCommandHandler(key, event.target.value)}>{FontSize.map((size) =><option key={size} value={size}>{size}</option>)}</select>
            } else {
              inputTypes = <button key={key} onClick={() => applyExecCommandHandler(key, String(cmd.value))}>{cmd.name}</button>
            }
            return (inputTypes)
          })}
        {/* </div> */}

        {showColorPicker && (
          <div ref={draggableRef} style={{ width: '100px', height: '100px', backgroundColor: 'transparent', position: 'absolute', top: '20%', left: '50%', justifyContent: 'center', alignItems: 'center' }}>
          <input
              type="color"
              defaultValue={fontColor ? '#0000ff' : '#fcfc03'}
              onChange={handleColorChange}
              style={{ margin: '0px', width: '100px', height: '100px', backgroundColor: 'transparent', border:'none', position: 'absolute', opacity: 1, pointerEvents: 'auto', borderWidth: '0px' }} />
          
          <button
            style={{
              position: 'absolute',
              top: '10px',
              right: '10px',
              margin: '4px',
              width: '24px',
              height: '24px',
              background: 'black',
              color: 'white',
              alignItems: 'center',
              justifyContent: 'center',
              border: '2px solid black',
              borderColor: 'black',
              borderRadius: '50%',
              cursor: 'pointer',
            }}
            onClick={colorPickerCloseHandler}
          >
            X
          </button>
          </div>
        )}

        <div style={{ marginLeft:"50px", marginRight:"50px", marginTop:"50px", marginBottom:"50px", height: "40rem" }}>
          <ContentEditable />
        </div>   
      </div>
    </>
  )
}

export default App;