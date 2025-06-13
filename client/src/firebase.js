// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "home-heaven-694a9.firebaseapp.com",
  projectId: "home-heaven-694a9",
  storageBucket: "home-heaven-694a9.firebasestorage.app",
  messagingSenderId: "940931557906",
  appId: "1:940931557906:web:dcf12afeecb9e6251d86cb"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);