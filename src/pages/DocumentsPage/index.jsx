import React, { useEffect, useState } from "react";
import DocumentsList from "../../components/UI/DocumentsList";
import cx from "classnames";
import styles from "./DocumentsPage.module.css";
import { Api } from "../../api";
import Workbench from "../../components/UI/Workbench";

const api = new Api();

const DocumentsPage = () => {
  const [movable, setMovable] = useState(false);
  const [documentsListWidth, setDocumentsListWidth] = useState(300);

  const [documents, setDocuments] = useState();

  useEffect(() => {
    api.getAllDocuments().then((data) => setDocuments(data));
  }, []);

  const handleResizeList = (event) => {
    setDocumentsListWidth(event.clientX + 5);
  };

  return (
    <div
      className={cx(styles.documentsPage, movable && styles.inMove)}
      onMouseMove={(event) => movable && handleResizeList(event)}
    >
      <DocumentsList
        items={documents}
        setMovable={(val) => setMovable(val)}
        listWidth={documentsListWidth}
      />
      <Workbench file={null}/>
    </div>
  );
};

export default DocumentsPage;
