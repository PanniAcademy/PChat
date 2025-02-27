import { initializeApp } from "https://www.gstatic.com/firebasejs/11.3.1/firebase-app.js";
import { 
    getAuth, 
    createUserWithEmailAndPassword, 
    signInWithEmailAndPassword, 
    signOut 
} from "https://www.gstatic.com/firebasejs/11.3.1/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/11.3.1/firebase-firestore.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/11.3.1/firebase-analytics.js";

const firebaseConfig = {
    apiKey: "AIzaSyC33nFhCk6kr9nTJKZjCf_Ux-8j9synxhY",
    authDomain: "pchat-cd031.firebaseapp.com",
    projectId: "pchat-cd031",
    storageBucket: "pchat-cd031.appspot.com",
    messagingSenderId: "943721700844",
    appId: "1:943721700844:web:eaafc6214592a5260834c9",
    measurementId: "G-HJSX8FGMTB"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const analytics = getAnalytics(app);

window.auth = auth;
window.db = db;
window.createUserWithEmailAndPassword = createUserWithEmailAndPassword;
window.signInWithEmailAndPassword = signInWithEmailAndPassword;
window.signOut = signOut;

export { auth, db, onAuthStateChanged, collection, addDoc, query, where, onSnapshot, getDocs, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut };
