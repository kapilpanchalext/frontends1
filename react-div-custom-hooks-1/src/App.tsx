import { useRef, useState } from "react";
import useCreateParagraphText from "./hooks/useCreateParagraphText";
import useCustomFontType from "./hooks/optimized/useCustomFontType";
import { FontTypes } from "./hooks/util/HooksUtil";

function App() {
  const [content, setContent] = useState('');
  const contentEditableRef = useRef<HTMLDivElement>(null);
  const { applyParagraph } = useCreateParagraphText({contentEditableRef, content, setContent});
  const { applyCustomFontStyle } = useCustomFontType({contentEditableRef, content, setContent});

  // console.log(content);

  return (
    <>
      <div style={{backgroundColor:"#e3e3e3", margin: "0", height: "100vh", overflow: "hidden"}}>
        <h1 className="text-3xl font-bold underline">
          Custom Hooks!
        </h1>

        <button onClick={() => applyCustomFontStyle({ elementName: FontTypes.HEADING_H1 })}>Heading H1</button>
        <button onClick={() => applyCustomFontStyle({ elementName: FontTypes.HEADING_H2 })}>Heading H2</button>
        <button onClick={() => applyCustomFontStyle({ elementName: FontTypes.HEADING_H3 })}>Heading H3</button>
        <button onClick={() => applyCustomFontStyle({ elementName: FontTypes.HEADING_H4 })}>Heading H4</button>
        <button onClick={() => applyCustomFontStyle({ elementName: FontTypes.HEADING_H5 })}>Heading H5</button>
        <button onClick={() => applyCustomFontStyle({ elementName: FontTypes.HEADING_H6 })}>Heading H6</button>
        <button onClick={() => applyCustomFontStyle({ elementName: FontTypes.BOLD })}>Bold</button>
        <button onClick={() => applyCustomFontStyle({ elementName: FontTypes.ITALICS})}>Italics</button>
        <button onClick={() => applyCustomFontStyle({ elementName: FontTypes.UNDERLINE})}>Underline</button>
        <button onClick={() => applyCustomFontStyle({ elementName: FontTypes.STRIKETHRU })}>Strikethru</button>
        <button onClick={() => applyCustomFontStyle({ elementName: FontTypes.PARAGRAPH })}>Paragraph</button>
        <button onClick={applyParagraph}>Clear All</button>
        
        <div style={{backgroundColor:"white", margin:"50px", width: "90vw", height: "calc(100vh - 200px)", overflowY: "auto"}} 
             contentEditable ref={contentEditableRef}></div>
      </div>
    </>
  )
}

export default App;