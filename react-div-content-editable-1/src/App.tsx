import { useEffect, useRef, useState } from "react";

function App() {

  const[textContent, setTextContent] = useState<string | null>("<h1>Hello World</h1>");
  const editableTextContentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const updateTextContent = () => {
      const newTextContent = editableTextContentRef.current?.textContent || null;
      setTextContent(newTextContent);
      console.log(newTextContent); 
    }

    const div = editableTextContentRef.current;
    if (div) {
      div.addEventListener('input', updateTextContent);
    }

    return () => {
      if (div) {
        div.removeEventListener('input', updateTextContent);
      }
    };
  }, []);

  // setTextContent(editableTextContentRef.current?.textContent || null);

  return (
    <>
      <div>
        <h1 className="text-3xl font-bold underline">
          Hello world!
        </h1>
        <div contentEditable className="w-full h-full" ref={editableTextContentRef}>

        </div>

        <div><h1>Hello World</h1></div>
        <h1>
          Hello world!
        </h1>
      </div>
    </>
  )
}

export default App;
