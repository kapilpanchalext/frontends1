import { useCallback } from 'react';
import { PropTypes } from './interface/DataTypes';

const useCreateItalicText = ({contentEditableRef}: PropTypes) => {

    const applyItalic = useCallback(() => {
      const div = contentEditableRef.current;
      if (!div) {
        return;
      }
  
      const selection = window.getSelection();
      if (!selection || selection.rangeCount === 0) {
        return;
      }
  
      const range = selection.getRangeAt(0);
      const selectedText = range.toString();
  
      if (selectedText.length > 0) {
        const newNode = document.createElement("i");
        newNode.textContent = selectedText;
        range.deleteContents();
        range.insertNode(newNode);
        console.log(newNode);
      }
    }, [contentEditableRef]);
  
    return { applyItalic };
}

export default useCreateItalicText;