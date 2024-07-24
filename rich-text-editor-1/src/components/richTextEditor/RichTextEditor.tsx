import { useEffect, useRef, useState } from 'react';
import ContentEditable, { ForwardRichTextData } from '../contentEditable/ContentEditable';
import ButtonControls from '../buttonControls/ButtonControls';
import RichTextLayout from '../richTextLayout/RichTextLayout';

const RichTextEditor = () => {
  const [data, setData] = useState<string>(''); //Data to be sent to backend
  const richTextData = useRef<ForwardRichTextData>(null);
  const [isContentEditableEvent, setIsContentEditableEvent] = useState<boolean>(false);
  
  useEffect(() => {
    if (richTextData.current) {
      setData(richTextData.current.getRichTextRefData()?.innerHTML || '');
      setIsContentEditableEvent(false);
      console.log(richTextData.current.getScrollHeight());
    }
  }, [isContentEditableEvent]);

  console.log(data);

  return (
    <>
    <RichTextLayout />
      {/* <div style={{
            margin: "20px",
            marginTop: "0px",
            height: "50rem",
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
          }}> */}
            
            {/* <ButtonControls />
            <ContentEditable ref={richTextData} onPaste={setIsContentEditableEvent}/> */}
      {/* </div> */}
    </>
  )
}

export default RichTextEditor;