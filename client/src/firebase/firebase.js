import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyA78Y_s3julKboR3pVqdTFPniNTAVG2tXs",
  authDomain: "craftbazaar-71c09.firebaseapp.com",
  projectId: "craftbazaar-71c09",
  storageBucket: "craftbazaar-71c09.firebasestorage.app",
  messagingSenderId: "1013393924551",
  appId: "1:1013393924551:web:6e3929b0c25866f047b9e2",
  measurementId: "G-8DGWQ8ZR8T"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app)



export { app, auth };
