import React from "react";

interface DownloadButtonProps {
  downloadLink: string;
}

const DownloadButton: React.FC<DownloadButtonProps> = ({ downloadLink }) => (
  <a
    href={downloadLink}
    className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
  >
    Download
  </a>
);

export default DownloadButton;
