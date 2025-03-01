import { initializeApp } from "https://www.gstatic.com/firebasejs/10.0.0/firebase-app.js";
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/10.0.0/firebase-auth.js";
import { getFirestore, collection, doc, getDoc, setDoc } from "https://www.gstatic.com/firebasejs/10.0.0/firebase-firestore.js";

// Firebase Configuration
const firebaseConfig = {
  apiKey: "AIzaSyC33nFhCk6kr9nTJKZjCf_Ux-8j9synxhY",
  authDomain: "pchat-cd031.firebaseapp.com",
  projectId: "pchat-cd031",
  storageBucket: "pchat-cd031.firebasestorage.app",
  messagingSenderId: "943721700844",
  appId: "1:943721700844:web:eaafc6214592a5260834c9",
  measurementId: "G-HJSX8FGMTB"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

// ✅ Store Firebase objects globally for both login and contacts pages
window.auth = auth;
window.db = db;

// ✅ Store Auth functions in `window.authFunctions`
window.authFunctions = { signInWithEmailAndPassword, createUserWithEmailAndPassword, onAuthStateChanged };

// ✅ Store Firestore functions in `window.firestore`
window.firestore = { collection, doc, getDoc, setDoc };
