import { useRef, useState, useEffect } from 'react';
import './App.css'
import ContentEditable from './components/contentEditable/ContentEditable';
import TableOfContents from './components/tableOfContents/TableOfContents';
import log from './log';
import { ForwardRichTextData } from './model/DataModel';

function App() {
  log("<App /> rendered");
  const richTextDataRef = useRef<ForwardRichTextData>(null);
  const [isContentEditableEvent, setIsContentEditableEvent] = useState<boolean>(false);
  const [data, setData] = useState<string>('');

  const onPasteHandler = (isEditable: boolean) => {
    setIsContentEditableEvent(isEditable);
  };

  useEffect(() => {
    if (richTextDataRef.current) {
      setData(richTextDataRef.current.getRichTextRefData()?.innerHTML || '');
      setIsContentEditableEvent(false);
    }
  }, [isContentEditableEvent]);

  return (
    <>
      <div className="App">
      <h1>Table of Contents</h1>
      <div style={{ display: "flex", flexDirection: "row", justifyContent: "center", gap: "10px" }}>
        <TableOfContents rawData={data}/>
        <ContentEditable ref={richTextDataRef} onCustomPaste={onPasteHandler}/>
      </div>
    </div>
    </>
  )
}

export default App;