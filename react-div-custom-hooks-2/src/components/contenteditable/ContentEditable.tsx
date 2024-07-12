import { useRef } from 'react'

const ContentEditable = () => {
    const editableDivRef = useRef<HTMLDivElement>(null);

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