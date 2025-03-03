// firebase.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.0.0/firebase-app.js";
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword, signOut }
  from "https://www.gstatic.com/firebasejs/11.0.0/firebase-auth.js";
import { getFirestore, collection, addDoc, getDocs, query, where }
  from "https://www.gstatic.com/firebasejs/11.0.0/firebase-firestore.js";

// Replace with your Firebase config
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC33nFhCk6kr9nTJKZjCf_Ux-8j9synxhY",
  authDomain: "pchat-cd031.firebaseapp.com",
  projectId: "pchat-cd031",
  storageBucket: "pchat-cd031.firebasestorage.app",
  messagingSenderId: "943721700844",
  appId: "1:943721700844:web:eaafc6214592a5260834c9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db, signInWithEmailAndPassword, createUserWithEmailAndPassword, signOut, collection, addDoc, getDocs, query, where };
alert("firebase.js loaded correctly!");
console.log("firebase.js loaded correctly!");
