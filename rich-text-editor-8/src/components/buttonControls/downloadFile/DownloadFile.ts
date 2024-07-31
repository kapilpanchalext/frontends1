type Props = {
  data: string
}

export const DownloadFile = ({data}: Props) => {

    console.log("DownloadFile: ", data);
  
    if (data) {
      // Get the innerHTML content from the contentEditable element
      const htmlContent = data;

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