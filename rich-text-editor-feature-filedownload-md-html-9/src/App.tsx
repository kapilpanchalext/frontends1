import { useRef, useState } from 'react';

function App() {
  
  const richTextDataRef = useRef<HTMLDivElement>(null);
  const [data, setData] = useState<string>('');

  const onDownloadButtonClickHandler = () => {
    setData(richTextDataRef.current?.innerHTML || '');
    if (richTextDataRef.current) {
      // Get the innerHTML content from the contentEditable element
      const htmlContent = richTextDataRef.current.innerHTML;

      // Create a Blob with the HTML content
      const blob = new Blob([htmlContent], { type: 'application/x-hdoc' });
      // const blob = new Blob([htmlContent], { type: 'text/markdown' });

      // Create a URL for the Blob
      const url = URL.createObjectURL(blob);

      // Create an <a> element and set its href and download attributes
      const link = document.createElement('a');
      link.href = url;
      link.download = 'content.hdoc';
      // link.download = 'content.md';

      // Append the link to the document and trigger the download
      document.body.appendChild(link);
      link.click();

      // Clean up and remove the link
      document.body.removeChild(link);
      URL.revokeObjectURL(url);
    }
  }

  console.log(data);

  return (
    <div >
      <h1>Hello World</h1>
      <div style={{ 
              display: "flex", 
              flexDirection: "row", 
              justifyContent: "center", 
              gap: "10px" 
            }}>

        <div contentEditable={true} ref={richTextDataRef}
          style={{
            padding: '10px',
            border: '1px solid black',
            height: '500px',
            overflowY: 'auto',
            position: 'relative',
            width: '1000px',
            flex: '0 0 auto',
          }}
          >
        </div>
        <div style={{ 
              display: "flex", 
              flexDirection: "column", 
              justifyContent: "center", 
              gap: "10px" 
            }}>
              <button onClick={onDownloadButtonClickHandler}>Download</button>
        </div>
      </div>

    </div>
  );
}

export default App;