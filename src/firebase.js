import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyBM6uYLpshPiFyxzMp4Xn-_ssR7xzuEfL4",
  authDomain: "raj-portfolio-66f45.firebaseapp.com",
  projectId: "raj-portfolio-66f45",
  storageBucket: "raj-portfolio-66f45.appspot.com",
  messagingSenderId: "593453634882",
  appId: "1:593453634882:web:c4e639cc2b650b27fce4db"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

export const db=getFirestore();