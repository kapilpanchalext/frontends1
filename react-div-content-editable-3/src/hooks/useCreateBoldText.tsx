import { useCallback, useRef } from 'react'

const useCreateBoldText = () => {
    const contentEditableRef = useRef<HTMLDivElement>(null);

    const applyHeading = useCallback(() => {
      const div = contentEditableRef.current;
      if (!div) return;
  
      const selection = window.getSelection();
      if (!selection || selection.rangeCount === 0) return;
  
      const range = selection.getRangeAt(0);
      const selectedText = range.toString();
  
      if (selectedText.length > 0) {
        const newNode = document.createElement("h1");
        newNode.textContent = selectedText;
        range.deleteContents();
        range.insertNode(newNode);
      }
    }, []);
  
    return { contentEditableRef, applyHeading };
}

export default useCreateBoldText;