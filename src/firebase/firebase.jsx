// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA748X6RTpFnBRPSFwitkmSfoelz80YE1Y",
  authDomain: "blood-bank-3d839.firebaseapp.com",
  projectId: "blood-bank-3d839",
  storageBucket: "blood-bank-3d839.appspot.com",
  messagingSenderId: "259434653195",
  appId: "1:259434653195:web:e43c07e20b43955d30090e",
  measurementId: "G-VXVSGCPX5F"
};

// Initialize Firebase
 const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);