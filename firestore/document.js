import { useState, useEffect } from 'react';
import { docSnapshotToData } from "./helpers";

export const useDocumentOnce = () => {};
export const useDocumentDataOnce = () => {};

export const useDocumentListener = (docQuery, callback, errorCallback) => {
  useEffect(() => {
    const unsubscribe = docQuery.onSnapshot(
      (snapshot) => callback(snapshot),
      (error) => {
        console.log(error);
        errorCallback(error);
      }
    );

    return unsubscribe;
  }, []);
};

export const useDocumentDataListener = (documentQuery, callback, errorCallback) => {
  useDocumentListener(
    documentQuery,
    (snapshot) => callback(docSnapshotToData(snapshot)),
    errorCallback
  );
};

export const useDocument = (documentQuery) => {  
  const [documents, setDocument] = useState();
  const [error, setError] = useState();

  useDocumentListener(
    documentQuery,
    (doc) => setDocument(doc),
    (error) => setError(error)
  );

  return [documents, error, setDocument];
};

export const useDocumentData = (documentQuery) => {  
  const [documents, setDocument] = useState();
  const [error, setError] = useState();

  useDocumentDataListener(
    documentQuery,
    (doc) => setDocument(doc),
    (error) => setError(error)
  );

  return [documents, error, setDocument];
};