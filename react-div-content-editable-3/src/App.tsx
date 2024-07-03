import { useRef } from "react";
import textToHeadingHandler from "./util/textToHeadingHandler";

function App() {
  const contentEditableRef = useRef<HTMLDivElement>(null);

  

  return (
    <>
      <div>
        <h1 className="text-3xl font-bold underline">
          Text Editable!
        </h1>
        
        <div
          contentEditable
          ref={contentEditableRef}
        ></div>
        
        <button onClick={() => textToHeadingHandler(contentEditableRef)}>Heading</button>
      </div>
    </>
  )
}

export default App;