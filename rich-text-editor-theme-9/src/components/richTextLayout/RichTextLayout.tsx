import { useState, useRef, useEffect, useMemo, useCallback, ChangeEvent } from "react";
import ButtonControls from "../buttonControls/ButtonControls";
import ContentEditable, { ForwardRichTextData } from "../contentEditable/ContentEditable";
import "./RichTextLayout.css";
import ZoomControls from "../zoomControls/ZoomControls";
import TableOfContents from "../tableOfContents/TableOfContents";
import { Match } from "../../model/Data_Model";
import useSearchText from "../../hooks/useSearchText";

type Props = {
  layoutHeight: number;
  activeTheme: string;
}

const RichTextLayout = ({ layoutHeight, activeTheme}: Props) => {
  const [data, setData] = useState<string>(''); //Data to be sent to backend
  const [isReadonly, setIsReadonly] = useState<boolean>(true);
  const richTextData = useRef<ForwardRichTextData>(null);
  const [isContentEditableEvent, setIsContentEditableEvent] = useState<boolean>(false);
  const [scrollProgress, setScrollProgress] = useState<number>(0);
  const pageMarkerRef = useRef<HTMLDivElement>(null);
  const [zoomValue, setZoomValue] = useState<number>(100);
  const [tocKey, setTocKey] = useState<number>(0);
  const [keywords, setKeywords] = useState<string[]>([]);
  const [results, setResults] = useState<Match[]>([]);

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

  const onZoomValueChange = (event: ChangeEvent<HTMLInputElement>) => {
    setZoomValue(Number(event.target.value));
  }

  useEffect(() => {
    if (richTextData.current) {
      setData(richTextData.current.getRichTextRefData()?.innerHTML || '');
      setIsContentEditableEvent(false);
      setTocKey(prevKey => prevKey + 1);
    }
  }, [isContentEditableEvent]);

  const getKeyWordsHandler = (keywords: string[]) => {
    setKeywords(keywords);
  }

  const searchResults = useSearchText({keywords, text: data || '', onUpdateResults: setResults });

  const updateTOCOnHTMLUploadHandler = (isEditable: boolean) => {
    setIsContentEditableEvent(isEditable);
  }

  useEffect(() => {
    setResults(searchResults.current!);
  }, [keywords]);

  const removeMarkTags = () => {
    const marks = document.querySelectorAll('mark');
    marks.forEach(mark => {
      const parent = mark.parentNode;
      while (mark.firstChild) {
        parent?.insertBefore(mark.firstChild, mark);
      }
      parent?.removeChild(mark);
    });
  };

  if(results && results.length <= 0 && keywords.length <= 0){
    removeMarkTags();
  }

  const highlightText = useCallback(() => {
    const LENGTH_OF_OFFSET = "<mark></mark>".length;
  
    if (!richTextData.current || !results.length) {
      return;
    }
  
    const richTextRefData = richTextData.current.getRichTextRefData();
    
    if (!richTextRefData) {
      return;
    }
  
    let innerHTML = richTextRefData.innerHTML;
    let offset = 0;

    results.forEach((result) => {
      const { keyword } = result;
      if(innerHTML){
        const startIndex = innerHTML.indexOf(keyword, offset);
  
        if (startIndex !== -1) {
          const beforeKeyword = innerHTML.slice(0, startIndex);
          const afterKeyword = innerHTML.slice(startIndex + keyword.length);
          innerHTML = `${beforeKeyword}<mark>${keyword}</mark>${afterKeyword}`;
          offset = startIndex + keyword.length + LENGTH_OF_OFFSET;
        }
      }
    });
  
    richTextRefData.innerHTML = innerHTML;
  }, [richTextData.current, results]);
  
  highlightText();

  return (
    <>
      <div className="flex-container-row editor-content border-visible" style={{ height: `${layoutHeight}px` }}>
        <div className="flex-container-column editor-content border-visible flex-item-1"
          style={{ minWidth: "10%", maxWidth: "10%", marginRight: "0px", marginBottom: "50px", overflowY: "auto" }}>
            <TableOfContents key={tocKey} rawData={data}/>
          </div>

        <div className="flex-container-column editor-content flex-item-8" style={{ marginLeft: "5px", padding: "5px" }}>
          <div className="flex-container-row editor-content" style={{ marginLeft: "5px" }}>
            <ButtonControls  data={data} isReadonly={isReadonly} setIsReadonly={setIsReadonly} getKeyWords={getKeyWordsHandler} updateTOC={updateTOCOnHTMLUploadHandler}/>
          </div>

          <div style={{ display: "flex", flexDirection: "row", height: "2px", background: "#ccc", marginLeft: "15px", marginRight: "15px" }}>
            <div style={{ height: "2px", background: "#04AA6D", width: `${scrollProgress}%` }}></div>
          </div>

          <div className={`flex-container-row editor-content ${activeTheme === 'dark-mode' ? 'dark-mode-content-editable' : 'light-mode-content-editable'}`} style={{ marginLeft: "5px", height: "100%" }}>
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
              <ZoomControls zoomValue={zoomValue} setZoomValue={onZoomValueChange} setZoomLevel={setZoomValue}/>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default RichTextLayout;