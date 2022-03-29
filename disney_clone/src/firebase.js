import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore'
import 'firebase/compat/auth'
import 'firebase/compat/storage'

const firebaseConfig = {
    apiKey: "AIzaSyDy0qXcK6kSQBgxJbIqHg5l20IX5StHfls",
    authDomain: "disneyplus-clone-422bb.firebaseapp.com",
    projectId: "disneyplus-clone-422bb",
    storageBucket: "disneyplus-clone-422bb.appspot.com",
    messagingSenderId: "1066109362594",
    appId: "1:1066109362594:web:7b425840f210d01eeed2fb",
    measurementId: "G-VS9BFY8RH0"
  };


// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export { auth, provider, storage };
export default db;