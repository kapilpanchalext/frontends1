import { useRef, useState, useEffect } from "react";
import log from "../../log";
import { ForwardRichTextData } from "../../model/DataModel";
import ContentEditable from "../contentEditable/ContentEditable";
import TableOfContents from "../tableOfContents/TableOfContents";

const RichTextEditor = () => {
  log("<RichTextEditor /> rendered");

  const richTextDataRef = useRef<ForwardRichTextData>(null);
  const [isContentEditableEvent, setIsContentEditableEvent] = useState<boolean>(false);
  const [data, setData] = useState<string>('');
  const [tocKey, setTocKey] = useState<number>(0);

  const onPasteHandler = (isEditable: boolean) => {
    setIsContentEditableEvent(isEditable);
  };

  useEffect(() => {
    if (richTextDataRef.current) {
      setData(richTextDataRef.current.getRichTextRefData()?.innerHTML || '');
      setIsContentEditableEvent(false);
      setTocKey(prevKey => prevKey + 1);
    }
  }, [isContentEditableEvent]);

  return (
    <>
      <div className="App">
        <h1>Table of Contents</h1>
        <div style={{ display: "flex", flexDirection: "row", justifyContent: "center", gap: "10px" }}>
          <TableOfContents key={tocKey} rawData={data}/>
          <ContentEditable ref={richTextDataRef} onCustomPaste={onPasteHandler}/>
        </div>
      </div>
    </>
  )
}

export default RichTextEditor;