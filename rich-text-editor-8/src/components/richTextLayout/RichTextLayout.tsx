import { useState, useRef, useEffect, useMemo } from "react";
import ButtonControls from "../buttonControls/ButtonControls";
import ContentEditable, { ForwardRichTextData } from "../contentEditable/ContentEditable";
import "./RichTextModule.css";
import ZoomControls from "../zoomControls/ZoomControls";
import TableOfContents from "../tableOfContents/TableOfContents";

type Props = {
  layoutHeight: number;
}

const RichTextLayout = ({layoutHeight}: Props) => {
  const [data, setData] = useState<string>(''); //Data to be sent to backend
  const [isReadonly, setIsReadonly] = useState<boolean>(true);
  const richTextData = useRef<ForwardRichTextData>(null);
  const [isContentEditableEvent, setIsContentEditableEvent] = useState<boolean>(false);
  const [scrollProgress, setScrollProgress] = useState<number>(0);
  const pageMarkerRef = useRef<HTMLDivElement>(null);
  const [zoomValue, setZoomValue] = useState<number>(100);
  const [tocKey, setTocKey] = useState<number>(0);

  const MAX_NUMBER_OF_PAGES = 1000;
  const a4HeightPx = useMemo(() => (297 / 25.4) * 96, []);
  const a4Heights = useMemo(() => Array.from({ length: MAX_NUMBER_OF_PAGES }, (_, index) => index * a4HeightPx), [a4HeightPx]);
  
  const handleScroll = () => {
    const element1 = richTextData.current;
    const element2 = pageMarkerRef.current;
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

  const onZoomValueChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setZoomValue(Number(event.target.value));
  }

  useEffect(() => {
    if (richTextData.current) {
      setData(richTextData.current.getRichTextRefData()?.innerHTML || '');
      setIsContentEditableEvent(false);
      setTocKey(prevKey => prevKey + 1);
    }
  }, [isContentEditableEvent]);

  return (
    <>
      <div className="flex-container-row editor-content border-visible" style={{ height: `${layoutHeight}px` }}>
        <div className="flex-container-column editor-content border-visible flex-item-1"
          style={{ minWidth: "10%", maxWidth: "10%", marginRight: "0px", marginBottom: "50px", overflowY: "auto" }}>
            <TableOfContents key={tocKey} rawData={data}/>
          </div>

        <div className="flex-container-column editor-content flex-item-8" style={{ marginLeft: "5px", padding: "5px" }}>
          <div className="flex-container-row editor-content" style={{ marginLeft: "5px" }}>
            <ButtonControls isReadonly={isReadonly} setIsReadonly={setIsReadonly}/>
          </div>

          <div style={{ display: "flex", flexDirection: "row", height: "2px", background: "#ccc", marginLeft: "15px", marginRight: "15px" }}>
            <div style={{ height: "2px", background: "#04AA6D", width: `${scrollProgress}%` }}></div>
          </div>

          <div className="flex-container-row editor-content" style={{ marginLeft: "5px", height: "100%" }}>
            <ContentEditable ref={richTextData} onScroll={handleScroll} onCustomPaste={onPasteHandler} isReadonly={isReadonly} zoomValue={zoomValue}/>
            <div
              ref={pageMarkerRef}
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
          <div className="flex-container-row editor-content" style={{ marginLeft: "10px", marginRight: "5px", minHeight: "30px", display: "flex", justifyContent: "flex-end", alignItems: "center" }}>
            <div className="flex-container-column editor-content" style={{ minHeight: "30px", maxWidth: "10%", backgroundColor: "transparent", display: "flex", alignItems: "center", justifyContent: "center" }}>
              <ZoomControls zoomValue={zoomValue} setZoomValue={onZoomValueChange}/>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default RichTextLayout;