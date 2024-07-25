import { useState, useRef, useEffect } from "react";
import ButtonControls from "../buttonControls/ButtonControls";
import ContentEditable, { ForwardRichTextData } from "../contentEditable/ContentEditable";
import "./RichTextModule.css";

type Props = {
    layoutHeight: number;
}

const RichTextLayout = ({layoutHeight}: Props) => {
  const [data, setData] = useState<string>(''); //Data to be sent to backend
  const richTextData = useRef<ForwardRichTextData>(null);
  const [isContentEditableEvent, setIsContentEditableEvent] = useState<boolean>(false);
  
  const [scrollProgress, setScrollProgress] = useState<number>(0);
  // const [scrollPosition, setScrollPosition] = useState<number>(0);
  const contentEditableRef2 = useRef<HTMLDivElement>(null);
  const a4HeightPx = (297 / 25.4) * 96;
  const MAX_NUMBER_OF_PAGES = 1000;
  const a4Heights = Array.from({ length: MAX_NUMBER_OF_PAGES }, (_, index) => index * a4HeightPx);
  
  const handleScroll = () => {
    const element1 = richTextData.current;
    const element2 = contentEditableRef2.current;
    const winScroll = element1!.getScrollTop();
    const height = element1!.getScrollHeight() - element1!.getClientHeight();
    const scrolled = (winScroll / height) * 100;

    if (element1 && element2) {
      const winScroll = element1!.getScrollTop();
      setScrollProgress(scrolled);
      element2.scrollTop = winScroll;
    }
  };

  const onPasteHandler = (isEditable: boolean) => {
    setIsContentEditableEvent(isEditable);
  };

  useEffect(() => {
    if (richTextData.current) {
      setData(richTextData.current.getRichTextRefData()?.innerHTML || '');
      setIsContentEditableEvent(false);
    }
  }, [isContentEditableEvent]);

  return (
    <>
    <div className="flex-container-row editor-content border-visible" style={{ height: `${layoutHeight}px` }}>
      <div className="flex-container-column editor-content border-visible flex-item-1"
        style={{ minWidth: "10%", marginRight: "10px", marginBottom: "10px" }}></div>

      <div className="flex-container-column editor-content flex-item-8" style={{ marginLeft: "5px", padding: "5px" }}>
        <div className="flex-container-row editor-content border-visible" style={{ marginLeft: "5px" }}>
          <ButtonControls />
        </div>

        <div style={{ display: "flex", flexDirection: "row", height: "2px", background: "#ccc", marginLeft: "15px", marginRight: "15px" }}>
          <div style={{ height: "2px", background: "#04AA6D", width: `${scrollProgress}%` }}></div>
        </div>

        <div className="flex-container-row editor-content" style={{ marginLeft: "5px", height: "100%" }}>
          <ContentEditable ref={richTextData} onScroll={handleScroll} onPaste={() => onPasteHandler(false)} />
          <div
            ref={contentEditableRef2}
            className="flex-container-column editor-content border-visible"
            style={{ marginLeft: "5px", width: "20px", position: "relative", overflow: "hidden" }}>
            {a4Heights.map((height, index) => (
              <div
                key={index}
                style={{
                  position: "absolute",
                  top: `${height}px`,
                  width: "100%",
                }}>
                <hr className="moving-line" style={{ width: "100%" }} />
                <h6 className="moving-line" style={{ marginTop: "1px" }}>A4</h6>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  </>
  )
}

export default RichTextLayout;