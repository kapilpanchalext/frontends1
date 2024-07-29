import { forwardRef, useEffect, useImperativeHandle, useRef } from 'react';
import { ForwardRichTextData } from '../../model/DataModel';
import log from '../../log';

type Props = {
    onCustomPaste: (isEditable: boolean) => void;
} & React.HTMLAttributes<HTMLDivElement>;

const ContentEditable = forwardRef<ForwardRichTextData, Props>(({onCustomPaste}: Props, ref) => {
    log("<ContentEditable /> rendered");
    const richTextDataRef = useRef<HTMLDivElement>(null);

    useImperativeHandle(ref, () => ({
        getRichTextRefData() {
            return richTextDataRef.current;
        },
        getScrollHeight() {
            return richTextDataRef.current?.scrollHeight || 0;
        },
        getScrollTop(){
            return richTextDataRef.current?.scrollTop || 0;
        },
        getClientHeight(){
            return richTextDataRef.current?.clientHeight || 0;
        },
        getQuerySelectorAll(selectors: string){
            return document.createDocumentFragment().querySelectorAll(selectors);
        }
    }));

    useEffect(() => {
        const editableDiv = richTextDataRef.current;
    
        const handleKeyDown = (event: KeyboardEvent) => {
          if (event.key === 'Enter') {
            if (editableDiv) {
            //   console.log("OnEnterKey: ", editableDiv.innerHTML);
              onCustomPaste(true);
            }
          }
        };
    
        const handleInput = () => {
        //   console.log("HandleInput: ", editableDiv?.innerHTML);
          onCustomPaste(true);
        };
    
        const handlePaste = (event: ClipboardEvent) => {
            console.log("HANDLE PASTE: ");
          if (editableDiv) {
            event.preventDefault();
            const html = event.clipboardData?.getData('text/html') || '';
            const text = event.clipboardData?.getData('text/plain') || '';
            console.log("INSIDE IF:");
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
            onCustomPaste(true);
            // console.log("OnPaste: ", editableDiv.innerHTML);
          }
        };

        if (editableDiv) {
          console.log("INSIDE ADD HANDLERS");
          editableDiv.addEventListener('keydown', handleKeyDown);
          editableDiv.addEventListener('input', handleInput);
          editableDiv.addEventListener('paste', handlePaste);
        }

        return () => {
        //   if (editableDiv) {
        //     console.log("INSIDE REMOVE HANDLERS");
        //     editableDiv.removeEventListener('keydown', handleKeyDown);
        //     editableDiv.removeEventListener('input', handleInput);
        //     editableDiv.removeEventListener('paste', handlePaste);
        //   }
        };
      }, [onCustomPaste]);

  return (
    <div contentEditable={true} ref={richTextDataRef}
        style={{
        padding: '10px',
        border: '1px solid black',
        height: '600px',
        overflowY: 'auto',
        position: 'relative',
        width: '400mm',
        flex: '0 0 auto'
    }}></div>
  )
});

export default ContentEditable;