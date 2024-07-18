import { useState, useRef, useEffect, useCallback } from "react";
import { Match } from "./model/Data_Model";
import DFA from "./algorithm/DFA";

function App() {
  const [keywords, setKeywords] = useState<string[]>([]);
  const [text, setText] = useState<string>();
  const [htmlElement, setHtmlElement] = useState<Element>();
  const [results, setResults] = useState<Match[]>([]);
  const contentEditableRef = useRef<HTMLDivElement>(null);
  const originalHTML = useRef<Element>();
  const [isFirstLoad, setIsFirstLoad] = useState<boolean>(true);

  const dfa = DFA();

  const searchText = useCallback(() => {
    dfa.patternMatchingMachine(keywords);
    dfa.buildFailureLinks();
    const searchResults = dfa.search(htmlElement?.innerHTML || '');
    setResults(searchResults);
  }, [dfa, htmlElement, keywords]);

  const fileReadHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        const content = reader.result as string;
        setText(content);
      };
      reader.readAsText(file);
    }
  };

  const inputKeywordsHandler = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      const inputValue = (event.target as HTMLInputElement).value;
      const keywordsArray = inputValue ? inputValue.split(',').map(keyword => keyword.trim()) : [];
      setKeywords(keywordsArray);
      if(keywordsArray.length <= 0) {
        setIsFirstLoad(false);
      }
    } 
  };

  useEffect(() => {
    if (isFirstLoad === false && results.length === 0) {
      setKeywords(["<mark>", "</mark>"]);
      setIsFirstLoad(false);
      
      let innerHTML = htmlElement?.innerHTML;
      let offset = 0;

      results.forEach((result) => {
        const { keyword } = result;
        const startIndex = innerHTML?.indexOf(keyword, offset) || -1;
        
        if (startIndex !== -1) {
          const beforeKeyword = innerHTML?.slice(0, startIndex);
          const afterKeyword = innerHTML?.slice(startIndex + keyword.length);
          // innerHTML = `${beforeKeyword}<mark>${keyword}</mark>${afterKeyword}`;
          innerHTML = `${beforeKeyword}${afterKeyword}`;
          offset = startIndex;
        }
      });
      console.log(innerHTML);

      if(htmlElement){
        htmlElement.innerHTML = innerHTML || "";
      }
    }
  }, [isFirstLoad, results]);

  const highlightText = useCallback(() => {
    const lengthOfOffset = "<mark></mark>".length;

    if (!htmlElement || !results.length) {
      return;
    }

    let innerHTML = htmlElement.innerHTML;
    let offset = 0;

    results.forEach((result) => {
      const { keyword } = result;
      const startIndex = innerHTML.indexOf(keyword, offset);
      
      if (startIndex !== -1) {
        const beforeKeyword = innerHTML.slice(0, startIndex);
        const afterKeyword = innerHTML.slice(startIndex + keyword.length);
        innerHTML = `${beforeKeyword}<mark>${keyword}</mark>${afterKeyword}`;
        offset = startIndex + keyword.length + lengthOfOffset;
      }
    });

    htmlElement.innerHTML = innerHTML;
  }, [htmlElement, results]);

  highlightText();

  useEffect(() => {
    if (contentEditableRef.current) {
      originalHTML.current = htmlElement;
    }
  }, [contentEditableRef, htmlElement]);

  useEffect(() => {
    searchText();
  }, [keywords]);

  useEffect(() => {
    const editableDiv = contentEditableRef.current;
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Enter' && editableDiv) {
        event.preventDefault();
        setHtmlElement(editableDiv);
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

  // console.log("Keywords: ", keywords);
  // console.log("Keywords Length: ", keywords.length);

  return (
    <>
      <h1>Text Search Implementation</h1>
      <input type="file" onChange={fileReadHandler} />
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
          background: '#f5f5f5',
          position: 'relative',
        }}>
      </div>
    </>
  )
}

export default App;