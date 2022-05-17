import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCzDxJeRj0jWTJRvuRmFM1XwsVLUwBt4Ks",
  authDomain: "ecommerce0001-e9bd0.firebaseapp.com",
  projectId: "ecommerce0001-e9bd0",
  storageBucket: "ecommerce0001-e9bd0.appspot.com",
  messagingSenderId: "602541414517",
  appId: "1:602541414517:web:2958a0d5c62f30c299003c",
  measurementId: "G-2PBQRH8B6M",
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
