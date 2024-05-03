// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore, collection } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDJFMQJPyWNi7A74WQXMBWTdZ_NItvk6XA",
  authDomain: "learn-login-7507c.firebaseapp.com",
  projectId: "learn-login-7507c",
  storageBucket: "learn-login-7507c.appspot.com",
  messagingSenderId: "780870881980",
  appId: "1:780870881980:web:925f02a37d314a1a45f6b9",
  measurementId: "G-X2T72HSXN6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db= getFirestore(app);
export const usersCollection = collection(db, 'users');