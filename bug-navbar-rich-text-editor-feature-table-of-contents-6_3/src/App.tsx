import './App.css';
import log from './log';
import RichTextEditor from './components/richtexteditor/RichTextEditor';

function App() {
  log("<App /> rendered");
  // const richTextDataRef = useRef<ForwardRichTextData>(null);
  // const [isContentEditableEvent, setIsContentEditableEvent] = useState<boolean>(false);
  // const [data, setData] = useState<string>('');
  // const [tocKey, setTocKey] = useState<number>(0);
  // const location = useLocation();

  // const onPasteHandler = (isEditable: boolean) => {
  //   setIsContentEditableEvent(isEditable);
  // };

  // useEffect(() => {
  //   if (richTextDataRef.current) {
  //     setData(richTextDataRef.current.getRichTextRefData()?.innerHTML || '');
  //     setIsContentEditableEvent(false);
  //     setTocKey(prevKey => prevKey + 1);
  //   }
  // }, [isContentEditableEvent]);

  // useEffect(() => {
  //   const hash = location.hash;
  //   if (hash) {
  //     const element = document.getElementById(hash.substring(1));
  //     if (element) {
  //       element.scrollIntoView({ behavior: 'smooth' });
  //     }
  //   }
  // }, [location]);
  
  return (
    <>
      <div className="App">
        {/* <h1>Table of Contents</h1>
        <div style={{ display: "flex", flexDirection: "row", justifyContent: "center", gap: "10px" }}>
          <TableOfContents key={tocKey} rawData={data}/>
          <ContentEditable ref={richTextDataRef} onCustomPaste={onPasteHandler}/>
        </div> */}
        <RichTextEditor />
      </div>
    </>
  )
}

export default App;