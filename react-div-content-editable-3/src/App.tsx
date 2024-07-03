import useCreateBoldText from "./hooks/useCreateBoldText";

function App() {
  // const contentEditableRef = useRef<HTMLDivElement>(null);

  // const textToHeadingHandler = ({contentEditableRef}: Props) => {
  //   const div = contentEditableRef.current;
  //   if (!div) return;
  
  //   const selection = window.getSelection();
  //   if (!selection || selection.rangeCount === 0) return;
  
  //   const range = selection.getRangeAt(0);
  //   const selectedText = range.toString();
  
  //   if (selectedText.length > 0) {
  //     const newNode = document.createElement("h1");
  //     newNode.textContent = selectedText;
  //     range.deleteContents();
  //     range.insertNode(newNode);
  //   }
  // };

  const { contentEditableRef, applyHeading } = useCreateBoldText();

  return (
    <>
      <div>
        <h1 className="text-3xl font-bold underline">
          Custom Hook useCreateBold Text!
        </h1>
        
        <div
          contentEditable
          ref={contentEditableRef}
        ></div>
        
        <button onClick={applyHeading}>Heading</button>
      </div>
    </>
  )
}

export default App;