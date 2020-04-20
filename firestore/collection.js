import { useState, useEffect } from 'react';
import { querySnapshotToDocs, querySnapshotToMap } from "./helpers";

export const useCollectionListener = (collectionQuery, callback, errorCallback) => {
  useEffect(() => {
    const unsubscribe = collectionQuery.onSnapshot(
      (snapshot) => callback(snapshot),
      (error) => {
        console.log(error);
        errorCallback(error);
      }
    );

    return unsubscribe;
  }, []);
};

export const useCollectionDataListener = (collectionQuery, callback, errorCallback) => {
  useCollectionListener(
    collectionQuery,
    (snapshot) => {
      callback(querySnapshotToDocs(snapshot));
    },
    errorCallback
  );
};

export const useCollectionMapListener = (collectionQuery, callback, errorCallback) => {
  useCollectionListener(
    collectionQuery,
    (snapshot) => {
      callback(querySnapshotToMap(snapshot));
    },
    errorCallback
  );
};

export const useCollectionOnce = () => {};

export const useCollectionDataOnce = () => {};

export const useCollectionMapOnce = () => {};

export const useCollection = (collectionQuery) => {
  const [documents, setDocuments] = useState();
  const [error, setError] = useState();

  useCollectionListener(
    collectionQuery,
    (docs) => setDocuments(docs),
    (error) => setError(error)
  );

  return [documents, error, setDocuments];
};

export const useCollectionData = (collectionQuery) => {
  const [documents, setDocuments] = useState();
  const [error, setError] = useState();

  useCollectionDataListener(
    collectionQuery,
    (docs) => setDocuments(docs),
    (error) => setError(error)
  );

  return [documents, error, setDocuments];
};

export const useCollectionMap = (collectionQuery) => {
  const [documents, setDocuments] = useState();
  const [error, setError] = useState();

  useCollectionMapListener(
    collectionQuery,
    (docs) => setDocuments(docs),
    (error) => setError(error)
  );

  return [documents, error, setDocuments];
};
