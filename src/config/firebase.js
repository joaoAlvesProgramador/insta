// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAquOQ0nUuQIOKRfCJoHSNi_Rm49Dl3scM",
  authDomain: "insta-a3260.firebaseapp.com",
  projectId: "insta-a3260",
  storageBucket: "insta-a3260.appspot.com",
  messagingSenderId: "340288204096",
  appId: "1:340288204096:web:bec4a5bf739a712a5c1ea5"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
export const firebaseApp = initializeApp(firebaseConfig);
