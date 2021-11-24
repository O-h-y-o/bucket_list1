// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBjfPq_yAK9aHhyu4lcAtXEQyxTP4ddVw8",
  authDomain: "sparta-basic.firebaseapp.com",
  projectId: "sparta-basic",
  storageBucket: "sparta-basic.appspot.com",
  messagingSenderId: "234962877283",
  appId: "1:234962877283:web:e33deae49d7f851b6f7156",
  measurementId: "G-P5NSD455F9",
};

initializeApp(firebaseConfig);
// Initialize Firebase

export const db = getFirestore();
