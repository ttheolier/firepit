import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBLlJLVwGB4-OuwTbMjPaWQQHvOOZnIr_4",
    authDomain: "firepit-27712.firebaseapp.com",
    projectId: "firepit-27712",
    storageBucket: "firepit-27712.appspot.com",
    messagingSenderId: "294201251692",
    appId: "1:294201251692:web:ed964422e73d16ff078549",
    measurementId: "G-PP5ZPC5P4F"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const db = firebaseApp.firestore();

  export default db;