import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage"
const firebaseConfig = {
    apiKey: "AIzaSyAl5KRQHOldxgCer9mLDJc2KRgB1kuPCQc",
    authDomain: "campus-management-9d681.firebaseapp.com",
    projectId: "campus-management-9d681",
    storageBucket: "campus-management-9d681.appspot.com",
    messagingSenderId: "68933004338",
    appId: "1:68933004338:web:f57ff39f3d54b9d892a02b"
};
const app = initializeApp(firebaseConfig)
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore();