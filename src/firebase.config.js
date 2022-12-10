import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyArjBsaZANhpyGIYimgFFqkgErXefXeiKY",
    authDomain: "house-marketplace-app-45.firebaseapp.com",
    projectId: "house-marketplace-app-45",
    storageBucket: "house-marketplace-app-45.appspot.com",
    messagingSenderId: "1692026618",
    appId: "1:1692026618:web:b63a939618f667554deb43"
};

// Initialize Firebase
initializeApp(firebaseConfig);
export const db = getFirestore();