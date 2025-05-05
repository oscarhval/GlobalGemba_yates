// src/firebase.js
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyARLAfBm4eG8N4OTIjqxfx0CI6TtZ6ZUH8",
    authDomain: "globalgemba-deecd.firebaseapp.com",
    projectId: "globalgemba-deecd",
    storageBucket: "globalgemba-deecd.firebasestorage.app",
    messagingSenderId: "698356955514",
    appId: "1:698356955514:web:59a0c3be3295a72051bec3"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();

export { auth, googleProvider };
