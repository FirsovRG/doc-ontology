import React from "react";
import styles from "./Workbench.module.css";
import FileViewer from "react-file-viewer";

const Workbench = ({ file }) => {
  return (
    <div className={styles.workbench}>
      {file ? (
        <FileViewer
          fileType={"pdf"}
          filePath={'/home/firsovrg/Рабочий%20стол/projects/doc-ontology/server/documents/Устав%202018.pdf'}
        />
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
