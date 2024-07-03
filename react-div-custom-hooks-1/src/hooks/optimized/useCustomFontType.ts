import { useCallback } from 'react';
import { PropTypes } from '../interface/DataTypes';

type Props = {
    elementName: string
}

const useCustomFontType = ({contentEditableRef}: PropTypes) => {
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
        const selectedText = range.toString();

        if (selectedText.length > 0) {
          const elementType: string = elementName || '';  
          const newNode = document.createElement(elementType);
          newNode.textContent = selectedText;
          range.deleteContents();
          range.insertNode(newNode);
        }
      }, [contentEditableRef]);

      return { applyCustomFontStyle };
}

export default useCustomFontType;