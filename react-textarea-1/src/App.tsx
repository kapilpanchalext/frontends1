import { useRef } from "react";
import useFloatingToolbar from "./hooks/useFloatingToolbar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAlignCenter, faAlignJustify, faAlignLeft, faAlignRight, faBold, faHeading, faItalic, faParagraph, faUnderline, fas } from "@fortawesome/free-solid-svg-icons";

function App() {

  // const [isDragging, setIsDragging] = useState<boolean>(false);

  // function makeDraggable(element: HTMLElement) {
  //   // let isDragging: boolean = false;
  //   let offsetX: number, offsetY: number;

  //   element.addEventListener('mousedown', function(event) {
  //     setIsDragging(true);
  //     // isDragging = true;
  //     offsetX = event.clientX - element.getBoundingClientRect().left;
  //     offsetY = event.clientY - element.getBoundingClientRect().top;
  //     document.addEventListener('mousemove', onMouseMove);
  //     document.addEventListener('mouseup', onMouseUp);
  //   });

  //   function onMouseMove(event: MouseEvent) {
  //     if (!isDragging) return;
  //     element.style.left = `${event.clientX - offsetX}px`;
  //     element.style.top = `${event.clientY - offsetY}px`;
  //   }

  //   function onMouseUp() {
  //     setIsDragging(false);
  //     // isDragging = false;
  //     document.removeEventListener('mousemove', onMouseMove);
  //     document.removeEventListener('mouseup', onMouseUp);
  //   }
  // }

  // const makeDraggable = useCallback((element: HTMLElement) => {
  //   let offsetX: number, offsetY: number;

  //   const onMouseMove = (event: MouseEvent) => {
  //     if (!isDragging) return;
  //     element.style.left = `${event.clientX - offsetX}px`;
  //     element.style.top = `${event.clientY - offsetY}px`;
  //   };

  //   const onMouseUp = () => {
  //     setIsDragging(false);
  //     document.removeEventListener('mousemove', onMouseMove);
  //     document.removeEventListener('mouseup', onMouseUp);
  //   };

  //   element.addEventListener('mousedown', (event) => {
  //     setIsDragging(true);
  //     offsetX = event.clientX - element.getBoundingClientRect().left;
  //     offsetY = event.clientY - element.getBoundingClientRect().top;
  //     document.addEventListener('mousemove', onMouseMove);
  //     document.addEventListener('mouseup', onMouseUp);
  //   });
  // }, [isDragging]);

  // useEffect(() => {
  //   const draggableElement = document.getElementById('draggable');
  //   makeDraggable(draggableElement!);

  //   // Add event listener to close button
  //   const closeButton = document.getElementById('closeButton');
  //   closeButton?.addEventListener('click', function() {
  //       if(draggableElement !== null) {
  //         draggableElement.style.display = 'none';
  //       }
  //   });
  // },[makeDraggable]);

  // const makeDraggable = useCallback((element: HTMLElement) => {
  //   let offsetX: number, offsetY: number;
  //   let isDragging = false;

  //   const onMouseMove = (event: MouseEvent) => {
  //     if (!isDragging) return;
  //     element.style.left = `${event.clientX - offsetX}px`;
  //     element.style.top = `${event.clientY - offsetY}px`;
  //   };

  //   const onMouseUp = () => {
  //     isDragging = false;
  //     document.removeEventListener('mousemove', onMouseMove);
  //     document.removeEventListener('mouseup', onMouseUp);
  //   };

  //   element.addEventListener('mousedown', (event) => {
  //     isDragging = true;
  //     offsetX = event.clientX - element.getBoundingClientRect().left;
  //     offsetY = event.clientY - element.getBoundingClientRect().top;
  //     document.addEventListener('mousemove', onMouseMove);
  //     document.addEventListener('mouseup', onMouseUp);
  //   });
  // }, []);

  // useEffect(() => {
  //   const draggableElement = document.getElementById('draggable');
  //   if (draggableElement) {
  //     makeDraggable(draggableElement);
  //   }

  //   // Add event listener to close button
  //   const closeButton = document.getElementById('closeButton');
  //   if (closeButton) {
  //     closeButton.addEventListener('click', function() {
  //       if (draggableElement) {
  //         draggableElement.style.display = 'none';
  //       }
  //     });
  //   }
  // }, [makeDraggable]);

  const draggableRef = useRef<HTMLDivElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  useFloatingToolbar({ draggableRef, closeButtonRef });
  return (
    <>
      <div
        ref={draggableRef}
        className="w-[500px] h-[100px] bg-slate-300 rounded-1xl absolute flex flex-col items-center justify-center"
        // style={{ width: '500px', height: '100px', backgroundColor: 'lightblue', position: 'absolute' }}
      >
        {/* <h1>Drag me!</h1> */}
        <div className="flex gap-2">
          <button><FontAwesomeIcon icon={faAlignLeft} /></button>
          <button><FontAwesomeIcon icon={faAlignCenter} /></button>
          <button><FontAwesomeIcon icon={faAlignJustify} /></button>
          <button><FontAwesomeIcon icon={faAlignRight} /></button>
          <button><FontAwesomeIcon icon={faBold} /></button>
          <button><FontAwesomeIcon icon={faItalic} /></button>
          <button><FontAwesomeIcon icon={faHeading} /></button>
          <button><FontAwesomeIcon icon={faParagraph} /></button>
        </div>
        <button className="bg-slate-600 hover:text-cyan-200" ref={closeButtonRef}>Close</button>
      </div>
      
    </>
  )
}

export default App;