import { useCallback } from 'react';
import { PropTypes } from '../interface/DataTypes';

type Props = {
    elementName: string
}

const useCustomFontType = ({contentEditableRef, setContent}: PropTypes) => {
    const applyCustomFontStyle = useCallback(({ elementName }: Props) => {
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
        const anchorNode = selection.anchorNode;
        const parentElement = selection.anchorNode?.parentElement;
        // console.log(selection.anchorNode);
        console.log("PARENT: " , parentElement);
        parentElement?.remove();
        console.log("ANCHOR NODE: " , anchorNode);
        const newNode = document.createElement(elementName);
        newNode.textContent = anchorNode!.textContent!;
        range.deleteContents();
        range.insertNode(newNode);
        // const children = Array.from(selection.anchorNode!.parentElement!.children);
        // console.log("CHILD: " , children[0]);

        // selection.deleteFromDocument();
        // const parentElement = selection.anchorNode?.parentElement;
        // if (parentElement) {
        //   const children = Array.from(parentElement.children);
        //   for (let i = 0; i < children.length; i++) {
        //     const child = children[i];
        //     const textContent = child.textContent;

        //     // Remove the child element from the parent
        //     child.remove();

        //     const newElement = document.createElement(elementName);
        //     newElement.textContent = textContent;
        //     // console.log(textContent);
        //     parentElement.appendChild(newElement);
        //   }
        // }

        // if (selectedText.length > 0) {
        //     const newNode = document.createElement(elementName);
        //     newNode.textContent = selectedText;
        //     range.deleteContents();
        //     range.insertNode(newNode);
        //     setContent(div.innerHTML);
        // }

      }, [contentEditableRef, setContent]);

      return { applyCustomFontStyle };

  //   const applyCustomFontStyle = useCallback(({ elementName }: Props) => {
  //     const div = contentEditableRef.current;
  //     if (!div) {
  //         return;
  //     }

  //     const selection = window.getSelection();
  //     if (!selection || selection.rangeCount === 0) {
  //         return;
  //     }

  //     const range = selection.getRangeAt(0);
  //     const selectedText = range.toString();

  //     if (selectedText.length > 0) {
  //         const newNode = document.createElement(elementName);

  //         if (newNode.nodeName.toLowerCase() === 'div') {
  //             newNode.style.display = 'inline';
  //         }

  //         newNode.appendChild(range.extractContents());
  //         range.insertNode(newNode);

  //         // Set the cursor after the newly inserted node
  //         range.setStartAfter(newNode);
  //         range.collapse(true);
  //         selection.removeAllRanges();
  //         selection.addRange(range);

  //         // // console.log(selection);
  //         // // console.log(selection.anchorNode?.parentElement?.firstElementChild);
  //         // console.log(selection.anchorNode?.parentElement?.children[0]);
  //         // console.log(selection.anchorNode?.parentElement?.children[1]);
  //         // console.log(selection.anchorNode?.parentElement?.children[2]);
          
  //         const parentElement = selection.anchorNode?.parentElement;

  //         if (parentElement) {
  //           const children = parentElement.children;
  //           for (let i = 0; i < children.length; i++) {
  //             console.log(children[i]);
  //           }
  //         }

  //         setContent(div.innerHTML);
  //     }
  // }, [contentEditableRef, setContent]);

  // return { applyCustomFontStyle };
}

export default useCustomFontType;