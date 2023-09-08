import React, { useState } from 'react';
import { Document, Page } from 'react-pdf';
import pdf from '../../../assets/login/Resume of Md Arifur Rahman.pdf'

const workerSrc = '/pdf.worker.js';
const PdfViewer = () => {
      const [numPages, setNumPages] = useState(null);
      const [pageNumber, setPageNumber] = useState(1);

      const onDocumentLoadSuccess = ({ numPages }) => {
            setNumPages(numPages);
      };


      return (
            <div>
                  <Document
                        file={pdf}
                        onLoadSuccess={onDocumentLoadSuccess}
                        workerSrc={workerSrc}
                  >
                        <Page pageNumber={pageNumber} />
                  </Document>
                  <p>
                        Page {pageNumber} of {numPages}
                  </p>
            </div>
      );
}
export default PdfViewer;