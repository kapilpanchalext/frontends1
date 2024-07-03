import { RefObject } from 'react'

type Props = {
  contentEditableRef: RefObject<HTMLDivElement>
}

const textToHeadingHandler = ({contentEditableRef}: Props) => {
  const div = contentEditableRef.current;
  if (!div) return;

  const selection = window.getSelection();
  if (!selection || selection.rangeCount === 0) return;

  const range = selection.getRangeAt(0);
  const selectedText = range.toString();

  if (selectedText.length > 0) {
    const newNode = document.createElement("h1");
    newNode.textContent = selectedText;
    range.deleteContents();
    range.insertNode(newNode);
  }
};

export default textToHeadingHandler;