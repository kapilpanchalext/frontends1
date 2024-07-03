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

    /**
     * This is the code for both applying Header and also removing scrubbing all the contents of the div
     * ***/

    // const applyBold = useCallback(() => {
    //   const div = contentEditableRef.current;
    //   if (!div) {
    //     return;
    //   }
  
    //   const selection = window.getSelection();
    //   if (!selection || selection.rangeCount === 0) {
    //     return;
    //   }
  
    //   const range = selection.getRangeAt(0);
    //   const selectedText = range.toString();
  
    //   if (selectedText.length > 0) {
    //     const newNodes = selectedText.split('\n').map(text => {
    //       const newNode = document.createElement("h1");
    //       newNode.textContent = text;
    //       return newNode;
    //     });
  
    //     range.deleteContents();
    //     newNodes.forEach(newNode => range.insertNode(newNode));
    //     console.log(newNodes);
    //   }
    // }, [contentEditableRef]);
  
    // const applyParagraph = useCallback(() => {
    //   const div = contentEditableRef.current;
    //   if (!div) {
    //     return;
    //   }
  
    //   const range = document.createRange();
    //   range.selectNodeContents(div);
    //   const selection = window.getSelection();
    //   selection?.removeAllRanges();
    //   selection?.addRange(range);
  
    //   const selectedText = range.toString();
  
    //   if (selectedText.length > 0) {
    //     const tempDiv = document.createElement('div');
    //     tempDiv.innerHTML = selectedText;
    //     const plainText = tempDiv.textContent || tempDiv.innerText || '';
  
    //     // Create a single text node with the plain text
    //     const textNode = document.createTextNode(plainText);
  
    //     range.deleteContents();
    //     range.insertNode(textNode);
    //     console.log(textNode);
    //   }
    // }, [contentEditableRef]);
  
    // return { applyBold, applyParagraph };
}

export default useCreateBoldText;