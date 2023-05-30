// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { GoogleAuthProvider, getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyD5xjA4SgC2wDimUmDRQRsI_HzpJFuQdoE",
  authDomain: "auth-project-219c1.firebaseapp.com",
  projectId: "auth-project-219c1",
  storageBucket: "auth-project-219c1.appspot.com",
  messagingSenderId: "711201334067",
  appId: "1:711201334067:web:370a6c1cfaa71799ce5446",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const provider = new GoogleAuthProvider();
const auth = getAuth(app);
const db = getFirestore(app);
export { auth, provider, db };
