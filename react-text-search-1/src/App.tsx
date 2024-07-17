import { useState, useRef, useEffect, useCallback } from "react";
import { Match } from "./model/Data_Model";
import DFA from "./algorithm/DFA";

function App() {
  const [keywords, setKeywords] = useState<string[]>([]);
  const [text, setText] = useState<string>('');
  const [results, setResults] = useState<Match[]>([]);
  // const keywordInputRef = useRef<HTMLInputElement>(null);
  const contentEditableRef = useRef<HTMLDivElement>(null);
  const searchInputRef = useRef<HTMLInputElement>(null);

  const dfa = DFA();

  const searchText = useCallback(() => {
    dfa.patternMatchingMachine(keywords);
    dfa.buildFailureLinks();
    const searchResults = dfa.search(text);
    setResults(searchResults);
  }, [dfa, keywords, text]);

  // useEffect(() => {
  //   console.log("SEARCH INPUT REF: " , searchInputRef.current?.value);
  //   setKeywords([searchInputRef.current?.value || '']);
  // }, [searchInputRef.current?.value]);
  // const fileReadHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
  //   const file = event.target.files?.[0];
  //   if (file) {
  //     const reader = new FileReader();
  //     reader.onloadend = () => {
  //       const content = reader.result as string;
  //       setText(content);
  //     };
  //     reader.readAsText(file);
  //   }
  // };

  const inputKeywordsHandler = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      const inputValue = (event.target as HTMLInputElement).value;
      const keywordsArray = inputValue.split(',').map(keyword => keyword.trim());
      setKeywords(keywordsArray);
    } 
  };

  // console.log(keywords);
  // console.log(keywordInputRef.current!.value);

  const highlightText = useCallback(() => {
    if (!results.length) return text;

    const segments: JSX.Element[] = [];
    let lastIndex = 0;

    results.forEach((result, index) => {
      const { keyword, index: endIndex } = result;
      const startIndex = endIndex - keyword.length + 1;

      if (startIndex > lastIndex) {
        segments.push(
          <span key={`text-${index}`}>{text.slice(lastIndex, startIndex)}</span>
        );
      }

      segments.push(
        <span key={`highlight-${index}`} style={{ backgroundColor: 'yellow' }}>
          {text.slice(startIndex, endIndex + 1)}
        </span>
      );

      lastIndex = endIndex + 1;
    });

    if (lastIndex < text.length) {
      segments.push(
        <span key="text-end">{text.slice(lastIndex)}</span>
      );
    }

    return segments;
  }, [results, text]);

  useEffect(() => {
    searchText();
  }, [keywords]);

  useEffect(() => {
    const editableDiv = contentEditableRef.current;
    // const handleInput = () => {
    //   if (editableDiv) {
    //     console.log(editableDiv.innerText);
    //   }
    // };
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Enter' && editableDiv) {
        event.preventDefault();
        // console.log(editableDiv.innerText);
        setText(editableDiv.innerText);
      }
    };
    if (editableDiv) {
      editableDiv.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      if (editableDiv) {
        editableDiv.removeEventListener('keydown', handleKeyDown);
      }
    };
  }, []);

  return (
    <>
      <h1>Text Search Implementation</h1>
      <input type="file" onChange={() => {console.log("File Upload Handler");}} />
      <p>File content:</p>
      <input
        placeholder="Search..."
        onKeyDown={inputKeywordsHandler}
      />
      <h3>Total No of Times String '{keywords}' found = {results.length} </h3>
      <div
        contentEditable={true}
        ref={contentEditableRef}
        style={{
          whiteSpace: 'pre-wrap',
          wordWrap: 'break-word',
          height: '600px',
          overflowY: 'auto',
          border: '1px solid #ccc',
          padding: '10px',
          background: '#f5f5f5'
      }}>
        {highlightText()}
      </div>
    </>
  )
}

export default App;