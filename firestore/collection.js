import { useState, useEffect } from 'react';
import { querySnapshotToDocs, querySnapshotToMap, useGetQuery } from "./helpers";

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

export const useCollectionOnce = (collectionQuery) => {
  const [snapshot, setSnapshot] = useState()
  const [error, setError] = useState()
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    collectionQuery.get()
      .then((querySnapshot) => {
        setSnapshot(querySnapshot)
        setLoading(false)
      }).catch((error) => {
        setError(error)
        setLoading(false)
      })
  }, [])

  return [snapshot, loading, error, setSnapshot]
};

export const useCollectionDataOnce = (collectionQuery) => {
  const [documents, setDocuments] = useState()
  const [error, setError] = useState()
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    collectionQuery.get()
      .then((querySnapshot) => {
        setDocuments(querySnapshotToDocs(querySnapshot))
        setLoading(false)
      }).catch((error) => {
        setError(error)
        setLoading(false)
      })
  }, [])

  return [documents, loading, error, setDocuments]
};

export const useCollectionMapOnce = (collectionQuery) => {
  const [map, setMap] = useState()
  const [error, setError] = useState()
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    collectionQuery.get()
      .then((querySnapshot) => {
        setMap(querySnapshotToMap(querySnapshot))
        setLoading(false)
      }).catch((error) => {
        setError(error)
        setLoading(false)
      })
  }, [])

  return [map, loading, error, setMap]
};

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
