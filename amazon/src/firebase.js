import firebase from "firebase";
// // Importing Firebase Firestore module
// import { Firestore } from 'firebase/firestore';

// // Importing Firebase Auth module
// import { Auth } from 'firebase/auth';
// // For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCuF2XG3BFsIqh1aDFJQMBdGhuGuWudNcs",
    authDomain: "clone-9f003.firebaseapp.com",
    projectId: "clone-9f003",
    storageBucket: "clone-9f003.appspot.com",
    messagingSenderId: "595163774260",
    appId: "1:595163774260:web:e48ac8d3164a9b45af7961",
    measurementId: "G-VS338DT5NG"
  };

  const firebaseApp=firebase.initializeApp(firebaseConfig);

  const db=firebaseApp.firestore();
  const auth=firebase.auth();

  export {db,auth};