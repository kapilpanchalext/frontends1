import { RefObject, useCallback, useEffect } from 'react';

type Props = {
    draggableRef: RefObject<HTMLDivElement>
    closeButtonRef: RefObject<HTMLButtonElement>
    showColorPicker: boolean
}

const useFloatingToolbar = ({draggableRef, closeButtonRef, showColorPicker}: Props) => {
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
      }, [closeButtonRef, draggableRef, makeDraggable, showColorPicker]);
}

export default useFloatingToolbar;