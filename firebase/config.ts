// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore/lite";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDA6DwykxJt5AIBLzODvEM9ZCGP3rrozzE",
  authDomain: "fir-app-7c836.firebaseapp.com",
  projectId: "fir-app-7c836",
  storageBucket: "fir-app-7c836.appspot.com",
  messagingSenderId: "357513278349",
  appId: "1:357513278349:web:bff0e9677db81791a443c4",
  measurementId: "G-8HEEB0YKCZ",
};

export const FirebaseApp = initializeApp(firebaseConfig);
export const FirebaseAuth = getAuth(FirebaseApp);
export const FirebaseDB = getFirestore(FirebaseApp);
