import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAJgypt6D2tgowdKGrGUSgEF4VXNQ6hV8w",
    authDomain: "test-project-52473.firebaseapp.com",
    projectId: "test-project-52473",
    storageBucket: "test-project-52473.appspot.com",
    messagingSenderId: "5327314345",
    appId: "1:5327314345:web:a5d0b2208dfd2c495a78b8",
    measurementId: "G-JT5ZFLNPL8"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
export default db;