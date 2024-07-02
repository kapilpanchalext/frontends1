import { useEffect, useRef, useState } from "react";

function App() {

  const[textContent, setTextContent] = useState<string | null>("<h1>Hello World</h1>");
  const editableTextContentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const updateTextContent = () => {
      const newTextContent = editableTextContentRef.current?.textContent || null;
      setTextContent(newTextContent);
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


  return (
    <>
      <div>
        <h1 className="text-3xl font-bold underline">
          Text Editable!
        </h1>
        <div contentEditable className="w-full h-full" style={{backgroundColor: 'gray'}} ref={editableTextContentRef}></div>

        <div dangerouslySetInnerHTML={{ __html: textContent || '' }}></div>
      </div>
    </>
  )
}

export default App;
