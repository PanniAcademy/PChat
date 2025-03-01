// firebase.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.0.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.0.0/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.0.0/firebase-firestore.js";

// Firebase Configuration
const firebaseConfig = {
    apiKey: "YOUR_CONFIG_HERE",
    authDomain: "YOUR_CONFIG_HERE",
    projectId: "YOUR_CONFIG_HERE",
    storageBucket: "YOUR_CONFIG_HERE",
    messagingSenderId: "YOUR_CONFIG_HERE",
    appId: "YOUR_CONFIG_HERE"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
