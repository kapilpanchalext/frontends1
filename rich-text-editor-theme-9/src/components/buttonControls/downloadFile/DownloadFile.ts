type Props = {
  data: string
}

export const DownloadFile = ({data}: Props) => {

  if (data) {
    const htmlContent = data;
    const blob = new Blob([htmlContent], { type: 'application/x-hdoc' });
    const url = URL.createObjectURL(blob);

    const link = document.createElement('a');
    link.href = url;
    link.download = 'content.hdoc';

    // Append the link to the document and trigger the download
    document.body.appendChild(link);
    link.click();

    // Clean up and remove the link
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  }
}