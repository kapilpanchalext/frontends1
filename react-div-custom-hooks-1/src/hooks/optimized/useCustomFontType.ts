import { useCallback } from 'react';
import { PropTypes } from '../interface/DataTypes';

type Props = {
    elementName: string
}

 // Helper function to calculate the cumulative length of text nodes
 const calculateOffset = (div: Node, node: Node, offset: number) => {
    let totalOffset = 0;
    const walker = document.createTreeWalker(div, NodeFilter.SHOW_TEXT, null);
    let currentNode = walker.nextNode();
    
    while (currentNode) {
      if (currentNode === node) {
        totalOffset += offset;
        break;
      } else {
        if (currentNode.textContent) {
          totalOffset += currentNode.textContent.length;
        }
      }
      currentNode = walker.nextNode();
    }
    return totalOffset;
  };

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
        const startRange = calculateOffset(div, range.startContainer, range.startOffset);
        const endRange = calculateOffset(div, range.endContainer, range.endOffset);
        const selectedText = range.toString();

        console.log("Cumulative Start Offset: ", startRange);
        console.log("Cumulative End Offset: ", endRange);
        console.log("SELECTED TEXT: " + selectedText);

        const startSubstring = contentEditableRef.current.innerHTML.substring(startRange, (startRange + 2 + elementName.length));
        const endSubstring = contentEditableRef.current.innerHTML.substring(endRange, (endRange + (2 + elementName.length) + (3 + elementName.length)));

        console.log("START SUBSTRING: " + startSubstring);
        console.log("END SUBSTRING: " + endSubstring);

        if(startSubstring !== '<' + elementName + '>' && endSubstring !== '</' + elementName + '>') {
            if (selectedText.length > 0) {
                const newNode = document.createElement(elementName);
                newNode.textContent = selectedText;
                range.deleteContents();
                range.insertNode(newNode);
                setContent(div.innerHTML);
            }
        }

        console.log("CONTENT EDITABLE REF: " + contentEditableRef.current.innerHTML);
        console.log("StartOffsetTag: " + contentEditableRef.current.innerHTML.substring(startRange, startRange + 2 + elementName.length));
        console.log("EndOffsetTag: " + contentEditableRef.current.innerHTML.substring(endRange + 2 + elementName.length, endRange + 7 + elementName.length));
      }, [contentEditableRef, setContent]);

      return { applyCustomFontStyle };
}

export default useCustomFontType;