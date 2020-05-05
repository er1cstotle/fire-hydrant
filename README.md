# Fire Hydrant BETA

> A collection of hooks and utility functions for common firebase operations

This package aims to make integration between [Firebase](https://firebase.google.com/docs/web/setup) and React applications a piece of cake.

## Installation

React Firebase Hooks requires versions of **React 16.8.0** or later and **Firebase v5.0.0** or later as peer dependencies

```
npm install --save er1cstotle/fire-hydrant#master
```

Fire Hydrant is not hosted on npm yet. The master branch will always have a working version of the package.


## Documentation

All hooks are imported from fire-hydrant like such:

```
import { useDocumentOnce } from 'fire-hydrant';
```

### Authentication

on the way

### Firestore

#### Collections

##### useCollection

```js
const [snapshot, loading, error] = useCollection(query);
```

##### useCollectionData

```js
const [data, loading, error] = useCollectionData(query);
```

##### useCollectionMap (experimental)

```js
const [map, loading, error] = useCollectionMap(query);
```

##### useCollectionOnce

##### useCollectionDataOnce

##### useCollectionMapOnce (experimental)

##### useCollectionListener

```js
useCollectionListener(query, (snapshot) => {

});
```

##### useCollectionDataListener


```js
useCollectionDataListener(query, (data) => {

});
```

##### useCollectionMapListener (experimental)


```js
useCollectionMapListener(map, (data) => {

});
```

#### Documents

##### useDocument 

```js
const [snapshot, loading, error] = useDocument(query);
```

##### useDocumentData


```js
const [data, loading, error] = useDocumentData(query);
```

##### useDocumentOnce

```js
const [snapshot, loading, error] = useDocumentOnce(query);
```

##### useDocumentDataOnce

```js
const [data, loading, error] = useDocumentDataOnce(query);
```

##### useDocumentListener 

```js
useDocumentListener(query, (snapshot) => {

});
```

##### useDocumentDataListener

```js
useDocumentDataListener(query, (data) => {

});
```

#### Helpers

A few utility functions for when you step off the beaten path. If you are using any of the hooks listed above you should not need to use these. 

##### docSnapshotToData

```js
docSnapshotToData(docSnapshot)
```

##### querySnapshotToDocs

```js
querySnapshotToDocs(querySnapshot)
```

##### querySnapshotToMap

```js
querySnapshotToMap(querySnapshot)
```

