import { useCallback } from 'react'
import { PropTypes } from './interface/DataTypes';

const useCreateBoldText = ({contentEditableRef}: PropTypes) => {

    const applyBold = useCallback(() => {
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
        const newNode = document.createElement("h1");
        newNode.textContent = selectedText;
        range.deleteContents();
        range.insertNode(newNode);
        console.log(newNode);
      }
    }, [contentEditableRef]);
  
    return { applyBold };
}

export default useCreateBoldText;