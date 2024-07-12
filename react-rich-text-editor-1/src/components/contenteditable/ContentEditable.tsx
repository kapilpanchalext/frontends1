import { useEffect, useRef } from 'react';

const ContentEditable = () => {

    const editableDivRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
      const handleInput = () => {
          if (editableDivRef.current) {
              console.log(editableDivRef.current.innerHTML);
          }
      };

      const editableDiv = editableDivRef.current;
      if (editableDiv) {
          editableDiv.addEventListener('input', handleInput);
      }

      return () => {
          if (editableDiv) {
              editableDiv.removeEventListener('input', handleInput);
          }
      };
    }, []);

    return (
      <div
        ref={editableDivRef}
        contentEditable
        style={{ 
                 border: '1px solid black', 
                 backgroundColor:"white", 
                 padding: '10px', 
                 width: '100%', 
                 height: '100%', 
                 overflowY: "auto" 
                }}
      >
      </div>
    );
};

export default ContentEditable;