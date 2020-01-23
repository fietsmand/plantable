// Firebase App (the core Firebase SDK) is always required and
// must be listed before other Firebase SDKs
import firebase from 'firebase';
import firebaseConfig from './firebaseConfig';
// Add the Firebase products that you want to use
console.log(firebaseConfig);

firebase.initializeApp(firebaseConfig);

export const { database } = firebase;
export default firebase;
