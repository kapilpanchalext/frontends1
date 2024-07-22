import { useEffect, useRef, useState } from 'react';
import ContentEditable, { ForwardRichTextData } from '../contentEditable/ContentEditable';

const RichTextEditor = () => {
  const [data, setData] = useState<string>('');
  const richTextData = useRef<ForwardRichTextData>(null);
  const [isContentEditableEvent, setIsContentEditableEvent] = useState<boolean>(false);

  useEffect(() => {
    if (richTextData.current) {
      setData(richTextData.current.getRichTextRefData()?.innerHTML || '');
    }
  }, [richTextData, isContentEditableEvent]);

  // console.log(data);

  return (
    <>
      <div style={{
            margin:"50px", 
            height: "45rem",
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
        <ContentEditable ref={richTextData} onPaste={setIsContentEditableEvent}/>
      </div>
    </>
  )
}

export default RichTextEditor;