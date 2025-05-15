"use client"
import { useRef } from "react";
import { useRichTextEditor } from "../../lib/rich-text-editor";

export default function Home() {

  // const editorRef = useRef<HTMLDivElement>(null);

//   const applyFormat = (tag: keyof HTMLElementTagNameMap) => {
//     const selection = window.getSelection();
//     if (!selection || selection.rangeCount === 0) return;

//     const range = selection.getRangeAt(0);
//     const selectedText = range.extractContents();

//     // Wrap selected content
//     const wrapper = document.createElement(tag);

//     // Convert to a temporary container to strip unwanted tags
//     const tempDiv = document.createElement("div");
//     tempDiv.appendChild(selectedText);

//     // Strip same tag to prevent nesting, or optionally others
//     stripTags(tempDiv, [tag]);

//     // Append cleaned content
//     wrapper.append(...tempDiv.childNodes);
//     range.insertNode(wrapper);

//     // Reset selection
//     selection.removeAllRanges();
//     const newRange = document.createRange();
//     newRange.selectNodeContents(wrapper);
//     selection.addRange(newRange);
//   };

//   const applyAlignment = (alignment: 'left' | 'center' | 'right') => {
//     const selection = window.getSelection();
//     if (!selection || selection.rangeCount === 0) return;

//     const range = selection.getRangeAt(0);
//     const content = range.extractContents();

//     // Wrap in temp div to strip any previous alignment
//     const tempDiv = document.createElement('div');
//     tempDiv.appendChild(content);

//     stripTags(tempDiv, ['div']); // remove nested <div> wrappers

//     const wrapper = document.createElement('div');
//     wrapper.style.textAlign = alignment;
//     wrapper.append(...tempDiv.childNodes);

//     range.insertNode(wrapper);

//     // Reset selection
//     selection.removeAllRanges();
//     const newRange = document.createRange();
//     newRange.selectNodeContents(wrapper);
//     selection.addRange(newRange);
//   };

//   function stripTags(element: HTMLElement, tagsToRemove: string[]) {
//   tagsToRemove.forEach(tag => {
//     const matches = element.querySelectorAll(tag);
//     matches.forEach(node => {
//       const parent = node.parentNode;
//       while (node.firstChild) parent?.insertBefore(node.firstChild, node);
//       parent?.removeChild(node);
//     });
//   });
// }

const editorRef = useRef<HTMLDivElement>(null);
  const editor = useRichTextEditor(editorRef);

  return (
    // <>
    //   <h1 className="text-4xl font-bold">Rich Text Editor New</h1>
    //   <div>
    //     <div className="toolbar">
    //       <button className="px-3 py-1.5 rounded-md border border-gray-300 text-sm font-medium text-gray-700 hover:bg-gray-100 active:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-1 focus:ring-blue-500"
    //         onClick={() => applyFormat('strong')}>Bold</button>
    //       <button className="px-3 py-1.5 rounded-md border border-gray-300 text-sm font-medium text-gray-700 hover:bg-gray-100 active:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-1 focus:ring-blue-500"
    //         onClick={() => applyFormat('em')}>Italic</button>
    //       <button className="px-3 py-1.5 rounded-md border border-gray-300 text-sm font-medium text-gray-700 hover:bg-gray-100 active:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-1 focus:ring-blue-500"
    //         onClick={() => applyFormat('u')}>Underline</button>
    //       <button className="px-3 py-1.5 rounded-md border border-gray-300 text-sm font-medium text-gray-700 hover:bg-gray-100 active:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-1 focus:ring-blue-500"
    //         onClick={() => applyFormat('mark')}>Highlight</button>

    //       <button className="px-3 py-1.5 rounded-md border border-gray-300 text-sm font-medium text-gray-700 hover:bg-gray-100 active:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-1 focus:ring-blue-500" 
    //         onClick={() => applyAlignment('center')}>Center</button>
    //       <button className="px-3 py-1.5 rounded-md border border-gray-300 text-sm font-medium text-gray-700 hover:bg-gray-100 active:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-1 focus:ring-blue-500" 
    //         onClick={() => applyAlignment('left')}>Left</button>
    //       <button className="px-3 py-1.5 rounded-md border border-gray-300 text-sm font-medium text-gray-700 hover:bg-gray-100 active:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-1 focus:ring-blue-500" 
    //         onClick={() => applyAlignment('right')}>Right</button>
    //     </div>

    //     <div
    //       // ref={editorRef}
    //       contentEditable
    //       suppressContentEditableWarning
    //       className="editor"
    //       style={{
    //         border: '1px solid #ccc',
    //         padding: '1rem',
    //         minHeight: '200px',
    //         marginTop: '1rem'
    //       }}
    //     />
    //   </div>
    // </>

    <>
      <div className="flex gap-2 mb-4">
        <button className="px-3 py-1.5 rounded-md border border-gray-300 text-sm font-medium text-gray-700 hover:bg-gray-100 active:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-1 focus:ring-blue-500" onClick={editor.bold}>Bold</button>
        <button className="px-3 py-1.5 rounded-md border border-gray-300 text-sm font-medium text-gray-700 hover:bg-gray-100 active:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-1 focus:ring-blue-500" onClick={editor.italic}>Italic</button>
        <button className="px-3 py-1.5 rounded-md border border-gray-300 text-sm font-medium text-gray-700 hover:bg-gray-100 active:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-1 focus:ring-blue-500" onClick={editor.underline}>Underline</button>
        <button className="px-3 py-1.5 rounded-md border border-gray-300 text-sm font-medium text-gray-700 hover:bg-gray-100 active:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-1 focus:ring-blue-500" onClick={editor.highlight}>Highlight</button>
        <button className="px-3 py-1.5 rounded-md border border-gray-300 text-sm font-medium text-gray-700 hover:bg-gray-100 active:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-1 focus:ring-blue-500" onClick={editor.code}>Code</button>
        <button className="px-3 py-1.5 rounded-md border border-gray-300 text-sm font-medium text-gray-700 hover:bg-gray-100 active:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-1 focus:ring-blue-500" onClick={editor.alignCenter}>Center</button>
      </div>

      <div
        ref={editorRef}
        contentEditable
        suppressContentEditableWarning
        className="min-h-[200px] border rounded p-3"
      />
    </>
  );
}
