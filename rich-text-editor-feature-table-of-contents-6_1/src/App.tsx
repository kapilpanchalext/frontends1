import { useState, useRef, useEffect } from 'react';
import TableOfContents from './components/tableOfContents/TableOfContents';
import ContentEditable from './components/contentEditable/ContentEditable';
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

  // console.log(richTextDataRef.current?.getRichTextRefData()?.innerHTML);

  return (
    <div className="App">
      <h1>Table of Contents</h1>
      <div style={{ display: "flex", flexDirection: "row", justifyContent: "center", gap: "10px" }}>
        <TableOfContents rawData={data}/>
        <ContentEditable ref={richTextDataRef} onCustomPaste={onPasteHandler}/>
      </div>
    </div>
  );
}

export default App;