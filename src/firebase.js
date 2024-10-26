// src/firebaseConfig.js
import { initializeApp } from "firebase/app"; // Import the Firebase app
import { getFirestore } from "firebase/firestore"; // Import Firestore from the modular SDK

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAgShKZNC5wW3zcsg7Q4ZneiBVueGRZsEo",
  authDomain: "cop-b5a64.firebaseapp.com",
  projectId: "cop-b5a64",
  storageBucket: "cop-b5a64.appspot.com",
  messagingSenderId: "10889463034",
  appId: "1:10889463034:web:289c8bef48ec646a6af543"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app); // Initialize Firestore

export { db };
