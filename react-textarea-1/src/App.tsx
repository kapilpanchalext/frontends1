import { useCallback, useEffect, useRef, useState } from "react";

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

  const makeDraggable = useCallback((element: HTMLElement) => {
    let offsetX: number, offsetY: number;
    let isDragging = false;

    const onMouseMove = (event: MouseEvent) => {
      if (!isDragging) return;
      element.style.left = `${event.clientX - offsetX}px`;
      element.style.top = `${event.clientY - offsetY}px`;
    };

    const onMouseUp = () => {
      isDragging = false;
      document.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseup', onMouseUp);
    };

    element.addEventListener('mousedown', (event) => {
      isDragging = true;
      offsetX = event.clientX - element.getBoundingClientRect().left;
      offsetY = event.clientY - element.getBoundingClientRect().top;
      document.addEventListener('mousemove', onMouseMove);
      document.addEventListener('mouseup', onMouseUp);
    });
  }, []);

  useEffect(() => {
    if (draggableRef.current) {
      makeDraggable(draggableRef.current);
    }

    if (closeButtonRef.current) {
      closeButtonRef.current.addEventListener('click', function() {
        if (draggableRef.current) {
          draggableRef.current.style.display = 'none';
        }
      });
    }
  }, [makeDraggable]);

  return (
    <>
      <div
        ref={draggableRef}
        style={{ width: '100px', height: '100px', backgroundColor: 'lightblue', position: 'absolute' }}
      >
        Drag me!
      </div>
      <button ref={closeButtonRef}>Close</button>
    </>
  )
}

export default App;