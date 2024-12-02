// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/app";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBO3rJcFjngiXPNzmmoxOcDiChaz5k0xLM",
  authDomain: "craftbazaar-dfb7c.firebaseapp.com",
  projectId: "craftbazaar-dfb7c",
  storageBucket: "craftbazaar-dfb7c.firebasestorage.app",
  messagingSenderId: "154948584242",
  appId: "1:154948584242:web:7b311a0ff912e3fc228d2b",
  measurementId: "G-T9GGH1TB3T"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)

export { app,auth}