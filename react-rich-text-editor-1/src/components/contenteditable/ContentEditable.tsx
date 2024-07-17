import { useEffect, useRef } from 'react';

type Props = {
    savePdf: boolean
}

const ContentEditable = ({savePdf}:Props) => {
    const url = 'http://localhost:9001/api/v1/get-html';

    const editableDivRef = useRef<HTMLDivElement>(null);
    console.log("SAVE PDF TRUE");
    
    useEffect(() => {
      const handleInput = () => {
          if (editableDivRef.current) {
            //   console.log(editableDivRef.current.outerHTML);
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

    if(savePdf && editableDivRef.current) {
        const data = { data: editableDivRef.current.outerHTML };

        fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
        .then(response => response.text())
        .then(data => console.log(data))
        .catch((error) => {
            console.error('Error:', error);
        });
    }

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