import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyCuF2XG3BFsIqh1aDFJQMBdGhuGuWudNcs",
    authDomain: "clone-9f003.firebaseapp.com",
    projectId: "clone-9f003",
    storageBucket: "clone-9f003.appspot.com",
    messagingSenderId: "595163774260",
    appId: "1:595163774260:web:e48ac8d3164a9b45af7961",
    measurementId: "G-VS338DT5NG"
  };

// Use this to initialize the firebase App
const firebaseApp = firebase.initializeApp(firebaseConfig);

// Use these for db & auth
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { auth, db };