<script type="module">
  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/11.3.1/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/11.3.1/firebase-analytics.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
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
  const auth = firebase.auth();
  const db = firebase.firestore();
  const analytics = getAnalytics(app);
</script>
