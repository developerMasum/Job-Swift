import React from "react";
import "tailwindcss/tailwind.css";

function ViewPdfCandidate({ resume }) {
  const pdfURL = `  https://server-hazel-nine.vercel.app/${resume}`;

  // Use Google Docs Viewer to display the PDF as an image
  const googleDocsViewerURL = `https://docs.google.com/gview?url=${encodeURIComponent(
    pdfURL
  )}&embedded=true`;

  return (
    <div className="container mx-auto mt-10">
      <iframe
        title="PDF Viewer"
        src={googleDocsViewerURL}
        width="100%"
        height="500"
      />
    </div>
  );
}

export default ViewPdfCandidate;
