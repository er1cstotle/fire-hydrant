import { useEffect } from 'react';

export const docSnapshotToData = (snapshot) => {
  if (!snapshot.exists) {
    return undefined;
  }
  
  return {
    id: snapshot.id,
    ...snapshot.data()
  };
};

export const querySnapshotToDocs = (snapshot) => {
  if (!snapshot) {
    return undefined;
  }

  return snapshot.docs.map((doc) => {
    return {
      id: doc.id,
      ...doc.data()
    };
  });
}

export const querySnapshotToMap = (snapshot) => {
  if (!snapshot) {
    return undefined;
  }

  return snapshot.docs.reduce((accum, doc) => {
  
    accum[doc.id] = {
      id: doc.id,
      ...doc.data()
    };
    return accum
  }, {});
}