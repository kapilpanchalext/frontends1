import { useCallback } from 'react';
import { PropTypes } from '../interface/DataTypes';
import { FONT_TYPES_MAP } from '../util/HooksUtil';

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
          const elementType: string = FONT_TYPES_MAP.get(elementName) || '';  
          const newNode = document.createElement(elementType);
          newNode.textContent = selectedText;
          range.deleteContents();
          range.insertNode(newNode);
        }
      }, [contentEditableRef]);

      return { applyCustomFontStyle };
}

export default useCustomFontType;