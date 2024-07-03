import { useCallback } from 'react'
import { PropTypes } from './interface/DataTypes'

const useCreateParagraphText = ({contentEditableRef}: PropTypes) => {
    const applyParagraph = useCallback(() => {
        const div = contentEditableRef.current;
        if (!div) {
          return;
        }
    
    const range = document.createRange();
    range.selectNodeContents(div);
    const selection = window.getSelection();
    selection?.removeAllRanges();
    selection?.addRange(range);

    const selectedText = range.toString();
  
    if (selectedText.length > 0) {
        const tempDiv = document.createElement('div');
        tempDiv.innerHTML = selectedText;
        const plainText = tempDiv.textContent || tempDiv.innerText || '';

        // Create a single text node with the plain text
        const textNode = document.createTextNode(plainText);

        range.deleteContents();
        range.insertNode(textNode);
        console.log(textNode);
        }
    }, [contentEditableRef]);
    
      return { applyParagraph };
}

export default useCreateParagraphText;