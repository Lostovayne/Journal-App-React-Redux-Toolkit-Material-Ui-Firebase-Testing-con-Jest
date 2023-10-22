// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

import { getFirestore } from "firebase/firestore/lite";

const firebaseConfig = {
    apiKey: "AIzaSyAOFMRCCATKP5PzHc7ApvL09WHUQRcRM4A",
    authDomain: "jornal-app-7e64a.firebaseapp.com",
    projectId: "jornal-app-7e64a",
    storageBucket: "jornal-app-7e64a.appspot.com",
    messagingSenderId: "224537198189",
    appId: "1:224537198189:web:2ed2494763e3f16f738964",
};

// Initialize Firebase
export const FirebaseApp = initializeApp(firebaseConfig);
export const FirebaseAuth = getAuth(FirebaseApp);
export const FirebaseDB = getFirestore(FirebaseApp);
