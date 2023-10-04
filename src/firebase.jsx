import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyBUkVObgDeaECAgWE-GA4s-6J689dJptRA",
  authDomain: "chat-b66f4.firebaseapp.com",
  projectId: "chat-b66f4",
  storageBucket: "chat-b66f4.appspot.com",
  messagingSenderId: "789788422799",
  appId: "1:789788422799:web:01b53deda0e74d4fd636fa"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore();