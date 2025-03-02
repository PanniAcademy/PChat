// ✅ Import Firebase modules
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.0.0/firebase-app.js";
import { 
    getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword, onAuthStateChanged 
} from "https://www.gstatic.com/firebasejs/10.0.0/firebase-auth.js";
import { 
    getFirestore, collection, doc, getDoc, setDoc, updateDoc, arrayUnion, onSnapshot
} from "https://www.gstatic.com/firebasejs/10.0.0/firebase-firestore.js";

// ✅ Firebase Configuration
const firebaseConfig = {
  authDomain: "pchat-cd031.firebaseapp.com",
  projectId: "pchat-cd031",
  storageBucket: "pchat-cd031.firebasestorage.app",
  messagingSenderId: "943721700844",
  appId: "1:943721700844:web:eaafc6214592a5260834c9",
  measurementId: "G-HJSX8FGMTB"
};

// ✅ Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

// ✅ Store Firebase objects globally
window.auth = auth;
window.db = db;

// ✅ Store Auth functions
window.authFunctions = { signInWithEmailAndPassword, createUserWithEmailAndPassword, onAuthStateChanged };

// ✅ Store Firestore functions
window.firestore = { collection, doc, getDoc, setDoc, updateDoc, arrayUnion, onSnapshot }; // ✅ Added onSnapshot
