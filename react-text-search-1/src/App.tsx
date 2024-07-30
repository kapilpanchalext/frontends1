import { useState, useRef, useEffect, useCallback, KeyboardEvent, ChangeEvent } from "react";
import { Match } from "./model/Data_Model";
import useSearchText from "./hooks/useSearchText";

function App() {
  const [keywords, setKeywords] = useState<string[]>([]);
  const [results, setResults] = useState<Match[]>([]);
  const [text, setText] = useState<string>("");
  const contentEditableRef = useRef<HTMLDivElement>(null);
  const originalHTML = useRef<Element>();

  const fileReadHandler = (event: ChangeEvent<HTMLInputElement>) => {
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

  const inputKeywordsHandler = (event: KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      const inputValue = (event.target as HTMLInputElement).value;
      const keywordsArray = inputValue ? inputValue.split(',').map(keyword => keyword.trim()) : [];
      setKeywords(keywordsArray);
    }
  };

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

    if (!originalHTML.current || !results.length) {
      return;
    }

    let innerHTML = originalHTML.current?.innerHTML;
    let offset = 0;

    results.forEach((result) => {
      const { keyword } = result;
      const startIndex = innerHTML.indexOf(keyword, offset);

      if (startIndex !== -1) {
        const beforeKeyword = innerHTML.slice(0, startIndex);
        const afterKeyword = innerHTML.slice(startIndex + keyword.length);
        innerHTML = `${beforeKeyword}<mark>${keyword}</mark>${afterKeyword}`;
        offset = startIndex + keyword.length + LENGTH_OF_OFFSET;
      }
    });
    originalHTML.current.innerHTML = innerHTML;
  }, [originalHTML.current, results]);

  highlightText();

  useEffect(() => {
    const editableDiv = contentEditableRef.current;

    if(text && editableDiv) {
      contentEditableRef.current.innerHTML = `<div>${text}</div>`;
      return;
    }

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Enter' && editableDiv) {
        event.preventDefault();
        originalHTML.current = editableDiv;
      }
    };

    const handlePaste = (event: ClipboardEvent) => {
      if (editableDiv) {
        event.preventDefault();
        const html = event.clipboardData?.getData('text/html') || '';
        const text = event.clipboardData?.getData('text/plain') || '';

        // Fallback to plain text if HTML is not available
        const content = html || text;

        // Insert the content at the current cursor position
        const selection = window.getSelection();
        if (!selection?.rangeCount) {
          return;
        }

        const range = selection.getRangeAt(0);
        range.deleteContents();

        const fragment = range.createContextualFragment(content);
        range.insertNode(fragment);

        // Move the cursor to the end of the inserted content
        range.collapse(false);
        selection.removeAllRanges();
        selection.addRange(range);

        // Update the originalHTML reference with the new content
        originalHTML.current = editableDiv;
      }
    };

    if (editableDiv) {
      editableDiv.addEventListener('keydown', handleKeyDown);
      editableDiv.addEventListener('paste', handlePaste);
    }

    return () => {
      if (editableDiv) {
        editableDiv.removeEventListener('keydown', handleKeyDown);
        editableDiv.removeEventListener('paste', handlePaste);
      }
    };
  }, [text]);

  useEffect(() => {
    if (contentEditableRef.current) {
      originalHTML.current = contentEditableRef.current;
      setText(contentEditableRef.current.innerHTML);
    }
  }, [keywords]);

  const searchResults = useSearchText({keywords, text: originalHTML.current?.innerHTML || '', onUpdateResults: setResults });

  useEffect(() => {
    setResults(searchResults.current!);
  }, [keywords, text]);

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