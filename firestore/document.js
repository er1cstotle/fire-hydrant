import { useState, useEffect } from 'react';
import { docSnapshotToData } from "./helpers";

export const useDocumentOnce = (documentQuery) => {
  const [snapshot, setSnapshot] = useState()
  const [error, setError] = useState()
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    documentQuery.get()
      .then((snapshot) => {
        setDocuments(snapshot)
        setLoading(false)
      }).catch((error) => {
        setError(error)
        setLoading(false)
      })
  }, [])

  return [snapshot, loading, error, setSnapshot]
};

export const useDocumentDataOnce = (documentQuery) => {
  const [document, setDocument] = useState()
  const [error, setError] = useState()
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    documentQuery.get()
      .then((snapshot) => {
        setDocument(docSnapshotToData(snapshot))
        setLoading(false)
      }).catch((error) => {
        setError(error)
        setLoading(false)
      })
  }, [])

  return [document, loading, error, setDocument]
};

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