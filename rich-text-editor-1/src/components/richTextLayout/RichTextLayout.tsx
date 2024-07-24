import { useState, useRef, useEffect } from "react";
import ButtonControls from "../buttonControls/ButtonControls";
import ContentEditable, { ForwardRichTextData } from "../contentEditable/ContentEditable";
import "./RichTextModule.css";

type Props = {

}

const RichTextLayout = (props: Props) => {
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
      <div className="flex-container-row editor-content border-visible" style={{ height: '800px' }} >
        <div className="flex-container-column editor-content border-visible  flex-item-1" style={{ minWidth: '10%', marginRight: '10px', marginBottom: '10px' }}>
        </div>

        <div className="flex-container-column editor-content border-visible flex-item-8" style={{ marginLeft: '5px', padding: '5px' }}>
          <div className="flex-container-row editor-content border-visible" style={{ marginLeft: '5px' }}>
            <ButtonControls />
          </div>
          
          <div style={{ display: "flex", flexDirection: "row", height: '2px', background: '#ccc', marginLeft: '10px', marginRight: '10px' }}>
            <div style={{ height: '2px', background: '#04AA6D', width: `${50}%` }}></div>
          </div>

          <div className="flex-container-row editor-content border-visible" style={{ marginLeft: '5px', height: '100%' }}>
            {/* <div className="editor-content border-visible flex-item-8" style={{ marginLeft: '5px' }}> */}
                <ContentEditable ref={richTextData} onPaste={setIsContentEditableEvent}/>
            {/* </div> */}
            <div className="editor-content border-visible" style={{ marginLeft: '5px', width: '20px' }}></div>
          </div>
        </div>
      </div>
    </>
  )
}

export default RichTextLayout;