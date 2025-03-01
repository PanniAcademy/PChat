import { initializeApp } from "https://www.gstatic.com/firebasejs/10.0.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.0.0/firebase-auth.js";
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
export const auth = getAuth(app);
export const db = getFirestore(app);

// ✅ Store Firestore and Auth in `window` to use in other files
window.auth = auth;
window.db = db;
window.firestore = { collection, doc, getDoc, setDoc }; // ✅ Make Firestore functions accessible
