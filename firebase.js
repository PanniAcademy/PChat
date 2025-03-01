// firebase.js - Fix for Import Issues
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.0.0/firebase-app.js";
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.0.0/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.0.0/firebase-firestore.js";

// 🔴 YOUR FIREBASE CONFIGURATION
const firebaseConfig = {
    apiKey: "AIzaSyC33nFhCk6kr9nTJKZjCf_Ux-8j9synxhY",
    authDomain: "pchat-cd031.firebaseapp.com",
    projectId: "pchat-cd031",
    storageBucket: "pchat-cd031.appspot.com",
    messagingSenderId: "943721700844",
    appId: "1:943721700844:web:eaafc6214592a5260834c9"
};

// 🔥 Initialize Firebase
const app = initializeApp(firebaseConfig);
window.auth = getAuth(app);  // ✅ Attach to window so login.html can access it
window.signInWithEmailAndPassword = signInWithEmailAndPassword;
window.createUserWithEmailAndPassword = createUserWithEmailAndPassword;
window.db = getFirestore(app);
