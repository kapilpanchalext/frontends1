import { forwardRef, useImperativeHandle, useRef, KeyboardEvent } from 'react';
import "./ContentEditable.module.css";

type Props = {
  isReadonly: boolean;
  onCustomPaste: (isEditable: boolean) => void;
  zoomValue: number;
} & React.HTMLAttributes<HTMLDivElement>;

export interface ForwardRichTextData {
  getRichTextRefData: () => HTMLDivElement | null;
  getScrollHeight: () => number;
  getScrollTop: () => number;
  getClientHeight: () => number;
}

const ContentEditable = forwardRef<ForwardRichTextData, Props>(({onCustomPaste, isReadonly, zoomValue, ...props}: Props, ref) => {
  const contentEditableRef = useRef<HTMLDivElement>(null);

  useImperativeHandle(ref, () => ({
    getRichTextRefData() {
      return contentEditableRef.current;
    },
    getScrollHeight() {
      return contentEditableRef.current?.scrollHeight || 0;
    },
    getScrollTop(){
      return contentEditableRef.current?.scrollTop || 0;
    },
    getClientHeight(){
      return contentEditableRef.current?.clientHeight || 0;
    }
  }),[]);

  const enterKeyDownHandler = (event: KeyboardEvent<HTMLDivElement>) => {
    if (event.key === 'Enter') {
        addIdTagsToHeaders();
        onCustomPaste(true);
    }
  };

  const pasteHandler = () => {
    onCustomPaste(true);
    setTimeout(() => {
      addIdTagsToHeaders();
    }, 0);
  };

  const addIdTagsToHeaders = () => {
    if (contentEditableRef.current) {
      const ids = contentEditableRef.current.querySelectorAll('h1, h2, h3, h4, h5, h6');
      ids.forEach((id, index) => {
          id.setAttribute('id', `header-${index}`);
      })
    }
  }

  return (
    <div
      {...props}
      ref={contentEditableRef}
      contentEditable={isReadonly}
      style={{
              border: `1px solid #525252`, 
              backgroundColor: 'white', 
              padding: '10px', 
              width: '100%',
              borderRadius: '10px', 
              overflow: "auto",
              zoom: zoomValue + '%',
            }}
              onPaste={pasteHandler}
              onKeyDown={(event: KeyboardEvent<HTMLDivElement>) => enterKeyDownHandler(event)}>
    </div>
  );
});

export default ContentEditable;