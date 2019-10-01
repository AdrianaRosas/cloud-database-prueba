import firebase from 'firebase/app';
import 'firebase/app';
import 'firebase/firestore';

firebase.initializeApp({
    apiKey: "AIzaSyDfvx2yvYhirNiyrfwJN_BYvyWkNcDnn5E",
    authDomain: "todo-a0612.firebaseapp.com",
    projectId: "todo-a0612",
});
let db = firebase.firestore();
db.settings({timestampsInSnapshots:true});

export default db;
