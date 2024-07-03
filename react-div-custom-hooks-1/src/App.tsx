import { useRef } from "react";
import useCreateBoldText from "./hooks/useCreateBoldText";
import useCreateItalicText from "./hooks/useCreateItalicText";
import useCreateParagraphText from "./hooks/useCreateParagraphText";

function App() {
  const contentEditableRef = useRef<HTMLDivElement>(null);
  const { applyBold } = useCreateBoldText({contentEditableRef});
  const { applyItalic } = useCreateItalicText({contentEditableRef});
  const { applyParagraph } = useCreateParagraphText({contentEditableRef});

  return (
    <>
      <div style={{backgroundColor:"#e3e3e3", margin: "0", height: "100vh", overflow: "hidden"}}>
        <h1 className="text-3xl font-bold underline">
          Custom Hooks!
        </h1>
        
        <div style={{backgroundColor:"white", margin:"50px", width: "90vw", height: "calc(100vh - 200px)", overflowY: "auto"}} 
             contentEditable ref={contentEditableRef}></div>
        <button onClick={applyBold}>Heading</button>
        <button onClick={applyItalic}>Italic</button>
        <button onClick={applyParagraph}>Paragraph</button>
      </div>
    </>
  )
}

export default App;