import { forwardRef, useEffect, useImperativeHandle, useRef } from 'react';

type Props = {
  // savePdf: boolean
  onPaste: (isEditable: boolean) => void;
} & React.HTMLAttributes<HTMLDivElement>;

export interface ForwardRichTextData {
  getRichTextRefData: () => HTMLDivElement | null;
  getScrollHeight: () => number;
}

const ContentEditable = forwardRef<ForwardRichTextData, Props>(({onPaste, ...props}: Props, ref) => {
  const contentEditableRef = useRef<HTMLDivElement>(null);

  useImperativeHandle(ref, () => ({
      getRichTextRefData() {
        return contentEditableRef.current;
      },
      getScrollHeight() {
        return contentEditableRef.current?.scrollHeight || 0;
      },
  }),[]);

  useEffect(() => {
    const editableDiv = contentEditableRef.current;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Enter') {
        if (editableDiv) {
          // console.log(editableDiv.innerHTML);
          onPaste(true);
        }
      }
    };

    const handleInput = () => {
      // console.log(editableDiv?.innerHTML);
      onPaste(true);
    };

    const handlePaste = (event: ClipboardEvent) => {
      if (editableDiv) {
        event.preventDefault();
        const html = event.clipboardData?.getData('text/html') || '';
        const text = event.clipboardData?.getData('text/plain') || '';

        // Fallback to plain text if HTML is not available
        const content = html || text;

        // Insert the content at the current cursor position
        const selection = window.getSelection();
        if (!selection?.rangeCount) {
          return;
        }

        const range = selection.getRangeAt(0);
        range.deleteContents();

        const fragment = range.createContextualFragment(content);
        range.insertNode(fragment);

        // Move the cursor to the end of the inserted content
        range.collapse(false);
        selection.removeAllRanges();
        selection.addRange(range);
        onPaste(true);
        // console.log(editableDiv.innerHTML);
      }
    };

    if (editableDiv) {
      editableDiv.addEventListener('keydown', handleKeyDown);
      editableDiv.addEventListener('input', handleInput);
      editableDiv.addEventListener('paste', handlePaste);
    }

    return () => {
      if (editableDiv) {
        editableDiv.removeEventListener('keydown', handleKeyDown);
        editableDiv.removeEventListener('input', handleInput);
        editableDiv.removeEventListener('paste', handlePaste);
      }
    };
  }, [onPaste]);

  return (
    <div
      {...props}
      ref={contentEditableRef}
      contentEditable
      style={{ 
                border: '1px solid black', 
                backgroundColor:"white", 
                padding: '10px', 
                width: '100%',
                borderRadius: '10px', 
                // height: '100%', 
                overflowY: "auto" 
            }}>
    </div>
  );
});

export default ContentEditable;