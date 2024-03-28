import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyCgDu5BVNKnL_Q4Zl56p-L0mFdXqBcUjHA",
    authDomain: "chatapp-c0e9a.firebaseapp.com",
    projectId: "chatapp-c0e9a",
    storageBucket: "chatapp-c0e9a.appspot.com",
    messagingSenderId: "642593591636",
    appId: "1:642593591636:web:d7911b0a1c080779d2f8c1"
  };
// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore()