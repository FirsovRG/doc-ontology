import React, { useState } from "react";
import styles from "./Workbench.module.css";
import { Page, pdfjs } from "react-pdf";
import { Document } from "react-pdf/dist/entry.webpack";
import { ArrowIcon } from "../icons/arrow";
import cx from "classnames";

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

const Workbench = ({ file }) => {
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);

  const onDocumentLoadSuccess = ({ numPages }) => {
    setNumPages(numPages);
    setPageNumber(1);
  };

  const changePage = (offset) => {
    setPageNumber((prevPageNumber) => prevPageNumber + offset);
  };

  const previousPage = () => {
    changePage(-1);
  };

  const nextPage = () => {
    changePage(1);
  };

  console.log(`http://localhost:8080/documents/${file.uuid}`)

  return (
    <div className={styles.workbench}>
      {file ? (
        <div className={styles.fileWrapper}>
          <div className={styles.fileTitle}>
            <p className={styles.title}>{file.name}</p>
          </div>
          <Document
            file={`http://localhost:8080/documents/${file.uuid}`}
            onLoadSuccess={onDocumentLoadSuccess}
          >
            <Page pageNumber={pageNumber} />
          </Document>
          <div className={styles.fileControls}>
            <button
              type="button"
              className={cx(styles.arrowButton, styles.prevButton)}
              onClick={previousPage}
              disabled={pageNumber <= 1}
            >
              <ArrowIcon />
            </button>
            <span>
              {pageNumber}/{numPages}
            </span>
            <button
              type="button"
              className={styles.arrowButton}
              onClick={nextPage}
              disabled={pageNumber >= numPages}
            >
              <ArrowIcon />
            </button>
          </div>
        </div>
        // <div style={{width: '100%'}}>
        //   <iframe
        //     src={`https://view.officeapps.live.com/op/embed.aspx?src=http://localhost:8080/documents/${file.uuid}`}
        //     width="100%"
        //     height="100%"
        //     frameborder="0"
        //   >
        //     This is an embedded{" "}
        //     <a target="_blank" href="http://office.com">
        //       Microsoft Office
        //     </a>{" "}
        //     document, powered by{" "}
        //     <a target="_blank" href="http://office.com/webapps">
        //       Office Online
        //     </a>
        //     .
        //   </iframe>
        // </div>
      ) : (
        <div className={styles.welcomeMessage}>
          <h1 className={styles.welcomeTitle}>Добро пожаловать!</h1>
          <p className={styles.welcomeBody}>
            Начните просмотр документа. Выберите файл из иерархии и получите
            доступ к дополнительным функциям.
          </p>
        </div>
      )}
    </div>
  );
};

export default Workbench;
