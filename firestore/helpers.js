export const docSnapshotToData = (snapshot) => {
  if (!snapshot.exists) {
    return undefined;
  }
  
  return {
    id: snapshot.id,
    ...snapshot.data()
  };
};

export const querySnapshotToDocs = (snapshot) => snapshot.docs.map((doc) => {
  return {
    id: doc.id,
    ...doc.data()
  };
});

export const querySnapshotToMap = (snapshot) => snapshot.docs.reduce((accum, doc) => {
  accum[doc.id] = {
    id: doc.id,
    ...doc.data()
  };
  return accum
}, {});