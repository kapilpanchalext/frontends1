import { useCallback } from 'react';
import { PropTypes } from '../interface/DataTypes';

type Props = {
    elementName: string
}

const useCustomFontType = ({contentEditableRef, content, setContent}: PropTypes) => {
    const applyCustomFontStyle = useCallback(({elementName}: Props) => {
        const div = contentEditableRef.current;
        if (!div) {
          return;
        }

        const selection = window.getSelection();
        if (!selection || selection.rangeCount === 0) {
          return;
        }

        const range = selection.getRangeAt(0);
        console.log("Start Offset: ", range.startOffset);
        console.log("End Offset: ", range.endOffset);
        // console.log(content);

        console.log("CONTENT EDITABLE REF: " + contentEditableRef.current.innerHTML);

        // console.log("StartOffsetTag: " +  content.substring(range.startOffset, (range.startOffset + 4)));
        // console.log("EndOffsetTag: " +  content.substring(range.endOffset, (range.endOffset + 5)));
        const selectedText = range.toString();

        if (selectedText.length > 0) {
          const elementType: string = elementName || '';  
          const newNode = document.createElement(elementType);
          newNode.textContent = selectedText;
          range.deleteContents();
          range.insertNode(newNode);
        }
        setContent(div.innerHTML);
      }, [content, contentEditableRef, setContent]);

      return { applyCustomFontStyle };
}

export default useCustomFontType;