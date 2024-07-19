import { useRef, useState } from 'react';
import ContentEditable, { ForwardRichTextData } from '../contentEditable/ContentEditable';

const RichTextEditor = () => {
  const [data, setData] = useState<string>('');
  const richTextData = useRef<ForwardRichTextData>(null);

  if(richTextData.current){
    setData(richTextData.current.getRichTextRefData()?.innerHTML || '');
  }

  // console.log("FORWARD REF: ", richTextData.current?.getRichTextRefData());
  console.log(data);

  return (
    <>
      <div style={{
            margin:"50px", 
            height: "45rem",
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
        <ContentEditable ref={richTextData}/>
      </div>
    </>
  )
}

export default RichTextEditor;