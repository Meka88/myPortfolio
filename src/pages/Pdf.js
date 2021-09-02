import { Document, Page } from 'react-pdf/dist/esm/entry.webpack'
import pdfFile from './assets/resume.pdf';
import './styles/pdf.css';

export default function Pdf() {
    return (
        <div className="pdfWrapper">
        <Document file={pdfFile} style="justify-content: center">
            <Page pageNumber={1} />
        </Document>
        </div>
    );
}