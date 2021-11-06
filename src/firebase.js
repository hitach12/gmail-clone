import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore"


const firebaseConfig = {
    apiKey: "AIzaSyDu66wjO7bFVjzW1cY2cApWMEnK53KDcRE",
    authDomain: "clone-437d2.firebaseapp.com",
    projectId: "clone-437d2",
    storageBucket: "clone-437d2.appspot.com",
    messagingSenderId: "358744837205",
    appId: "1:358744837205:web:a8cd694a974fa8542958dc",
    measurementId: "G-DPPH08SLG0"
  };
  

// const firebaseApp = 
firebase.initializeApp(firebaseConfig)

var db = firebase.firestore();
var auth = firebase.auth()
const provider = new firebase.auth.GoogleAuthProvider();

export {db , auth , provider};