import { useState, useRef } from "react";
// import { FontTypes } from "./hooks/util/HooksUtil";
// import useCustomFontType from "./hooks/optimized/useCustomFontType";
// import useCreateParagraphText from "./hooks/useCreateParagraphText";
import { CMD_MAP } from "./utils/Commands";

function App() {
  
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [content, setContent] = useState('');
  const contentEditableRef = useRef<HTMLDivElement>(null);
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
  //   document.execCommand('backColor', false, '#e3e3e3');
  // }

  const applyExecCommandHandler = (command: string, showUI: boolean = false, value: string | number) => {
    document.execCommand(command, showUI, String(value));
  }

  return (
    <>
      <div style={{backgroundColor:"#e3e3e3", margin: "0", height: "100vh", overflow: "hidden"}}>
        <h1 className="text-3xl font-bold underline">
          Custom Hooks!
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

        {Array.from(CMD_MAP.values()).map((cmd) => (
          <button key={cmd.name} onClick={() => document.execCommand(cmd.name, false, (cmd.value === undefined? cmd.value : ''  ))}>
            {cmd.name}
          </button>
        ))}

        {/* <button onClick={() => applyBackColour()}>{CMD_MAP.get(CMD.BACKCOLOR)?.name}</button> */}
        
        <div style={{backgroundColor:"white", margin:"50px", width: "90vw", height: "calc(100vh - 200px)", overflowY: "auto"}} 
             contentEditable ref={contentEditableRef}>
        </div>
      </div>
    </>
  )
}

export default App;