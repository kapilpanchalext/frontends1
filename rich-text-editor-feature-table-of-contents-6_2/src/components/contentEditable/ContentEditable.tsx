import { forwardRef, useImperativeHandle, useRef, KeyboardEvent } from 'react';
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

  const enterKeyDownHandler = (event: KeyboardEvent<HTMLDivElement>) => {
    if (event.key === 'Enter') {
        onCustomPaste(true);
    }
  };

  const pasteHandler = () => {
    onCustomPaste(true);
  };

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
    }}
      onPaste={pasteHandler}
      onKeyDown={(event: KeyboardEvent<HTMLDivElement>) => enterKeyDownHandler(event)}>
    </div>
  )
});

export default ContentEditable;