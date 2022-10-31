
import React,{useState} from 'react';
import classes from './OneFile.module.css';
//import { Document, Page,pdfjs } from 'react-pdf';
//import { Page, Text, View, Document } from 'react-pdf';
//import { Page, Text, View, Document, StyleSheet } from '@react-pdf/renderer';




const OneFile=()=>{

const url = "https://arxiv.org/pdf/1602.06581.pdf";




      const [numPages, setNumPages] = useState(null);
      const [pageNumber, setPageNumber] = useState(1);
  
    function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
    setPageNumber(1);
  }





return (

<div className={classes.oneFile}>

     {/*	
     <Document
        file={url}
        onLoadSuccess={onDocumentLoadSuccess}
	>
        <Page pageNumber={pageNumber}  width='100px' />
	
     </Document>
     */}
   






</div>

);



}

export default OneFile;
