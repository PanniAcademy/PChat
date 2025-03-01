// firebase.js - Corrected Version
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.0.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.0.0/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.0.0/firebase-firestore.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/11.4.0/firebase-analytics.js";

// 🔴 Corrected Firebase Configuration
const firebaseConfig = {
    apiKey: "AIzaSyC33nFhCk6kr9nTJKZjCf_Ux-8j9synxhY",
    authDomain: "pchat-cd031.firebaseapp.com",
    projectId: "pchat-cd031",
    storageBucket: "pchat-cd031.firebasestorage.app", // ✅ FIXED STORAGE BUCKET
    messagingSenderId: "943721700844",
    appId: "1:943721700844:web:eaafc6214592a5260834c9",
    measurementId: "G-HJSX8FGMTB"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);
export const db = getFirestore(app);
