import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyD3uv8HHEYtwiSDdPio5qnT8_z9vl7E4vM",
  authDomain: "chat-91c2d.firebaseapp.com",
  projectId: "chat-91c2d",
  storageBucket: "chat-91c2d.appspot.com",
  messagingSenderId: "993654799237",
  appId: "1:993654799237:web:a2d5d21315bcc2aa6da2ec"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore();