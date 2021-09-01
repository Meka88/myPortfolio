import {useState } from 'react';
import { Document, Page } from 'react-pdf';
import pdfFile from './Resume.pdf';

const options = {
    cMapUrl: 'cmaps/',
    cMapPacked: true,
  }

export default function Pdf () {
    const [numPages, setNumPages] = useState(null);
    const [pageNumber, setPageNumber] = useState(1);

    function onDocumentLoadSuccess({ numPages }) {
        setNumPages(numPages);
    }

    return(
        <div>
            <Document file={pdfFile} options={options} onLoadSuccess={onDocumentLoadSuccess}>
              <Page pageNumber={pageNumber} /> 
            </Document>   
            <p>Page {pageNumber} of {numPages}</p>        
        </div>
    )
}