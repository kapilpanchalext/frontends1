import { useState, useRef } from "react";
// import { FontTypes } from "./hooks/util/HooksUtil";
// import useCustomFontType from "./hooks/optimized/useCustomFontType";
// import useCreateParagraphText from "./hooks/useCreateParagraphText";
import { CMD, CMD_MAP } from "./utils/Commands";
import "./App.css";
import useFloatingToolbar from "./hooks/floatingtoolbar/useFloatingToolbar";
import { FontNames, FontSize } from "./utils/FontNames";

function App() {
  
  // const [content, setContent] = useState('');
  const contentEditableRef = useRef<HTMLDivElement>(null);
  const [showColorPicker, setShowColorPicker] = useState<boolean>(false);
  const draggableRef = useRef<HTMLDivElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  useFloatingToolbar({ draggableRef, closeButtonRef, showColorPicker });
  // const colorPickerRef = useRef<HTMLInputElement>(null);
  // const { applyParagraph } = useCreateParagraphText({contentEditableRef, setContent});
  // const { applyCustomFontStyle } = useCustomFontType({contentEditableRef, setContent});

  // const editorRef = useRef<HTMLDivElement>(null);

  // const applyFont = (fontFamily: string ) => {
  //   document.execCommand('fontName', false, fontFamily);
  //   // document.execCommand('bold', true, '');
  // };

  // const handleColorChange = (event: React.ChangeEvent<HTMLInputElement>) => {
  //   const color = event.target.value;
  // document.execCommand('backColor', false, color);
  // }

  // const applyBackColour = () => {
  //   document.execCommand('backColor', false, 'white');
  // }

  const handleColorChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    // document.execCommand(CMD.BACKCOLOR, false, event.target.value);
    documentExecCommand(CMD.BACKCOLOR, false, event.target.value);
  };

  const documentExecCommand = (command: string, showUI: boolean = false, value: string = "") => {
    document.execCommand(command, showUI, value);
  }

  const applyExecCommandHandler = (command: string, value: string = "") => {
    if(command === CMD.BACKCOLOR) {
      setShowColorPicker(true);
      return;
    }
    // document.execCommand(command, showUI, String(value));
    documentExecCommand(command, false, value);
  }

  return (
    <>
      <div style={{backgroundColor:"#e3e3e3", margin: "0", height: "100vh", overflow: "hidden"}}>
        <h1>
          Custom Hooks 2!
        </h1>       

        {/* <button onClick={() => applyCustomFontStyle({ elementName: FontTypes.HEADING_H1 })}>Heading H1</button>
        <button onClick={() => applyCustomFontStyle({ elementName: FontTypes.HEADING_H2 })}>Heading H2</button>
        <button onClick={() => applyCustomFontStyle({ elementName: FontTypes.HEADING_H3 })}>Heading H3</button>
        <button onClick={() => applyCustomFontStyle({ elementName: FontTypes.HEADING_H4 })}>Heading H4</button>
        <button onClick={() => applyCustomFontStyle({ elementName: FontTypes.HEADING_H5 })}>Heading H5</button>
        <button onClick={() => applyCustomFontStyle({ elementName: FontTypes.HEADING_H6 })}>Heading H6</button> */}
        {/* <button onClick={() => applyCustomFontStyle({ elementName: FontTypes.BOLD })}>Bold</button>
        <button onClick={() => applyCustomFontStyle({ elementName: FontTypes.ITALICS})}>Italics</button>
        <button onClick={() => applyCustomFontStyle({ elementName: FontTypes.UNDERLINE})}>Underline</button>
        <button onClick={() => applyCustomFontStyle({ elementName: FontTypes.STRIKETHRU })}>Strikethru</button>
        <button onClick={() => applyCustomFontStyle({ elementName: FontTypes.PARAGRAPH })}>Paragraph</button> */}
        {/* <button onClick={applyParagraph}>Clear All</button> */}

        {/* <button onClick={() => applyFont('Arial')}>Arial</button>
        <button onClick={() => applyFont('Courier New')}>Courier New</button>
        <button onClick={() => applyFont('Times New Roman')}>Times New Roman</button>
        <input type="color" id="colorPicker" onChange={handleColorChange} /> */}
        
        {/* {CMD_MAP.forEach((value) => {
           <button onClick={() => document.execCommand(value.name, false, value?.value)}>{value.name}</button>
        })} */}

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

        {showColorPicker && (
          <div ref={draggableRef} style={{ width: '100px', height: '100px', backgroundColor: 'transparent', position: 'absolute', top: '20%', left: '50%', justifyContent: 'center', alignItems: 'center' }}>
          <input
              type="color"
              defaultValue='#fcfc03'
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
            onClick={() => setShowColorPicker(false)}
          >
            X
          </button>
          </div>
        )}

        <div style={{backgroundColor:"white", margin:"50px", width: "90vw", height: "calc(100vh - 200px)", overflowY: "auto"}} 
             contentEditable ref={contentEditableRef}>
        </div>
      </div>
    </>
  )
}

export default App;