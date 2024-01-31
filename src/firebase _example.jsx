import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "enter-your-data",
  authDomain: "enter-your-data",
  projectId: "enter-your-data",
  storageBucket: "enter-your-data",
  messagingSenderId: "enter-your-data",
  appId: "enter-your-data"
};


// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore();