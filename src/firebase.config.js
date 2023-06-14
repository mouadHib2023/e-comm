import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
const firebaseConfig = {
  apiKey: "AIzaSyB0ieutad9cNnWBPDCTLMqGyO2dKNXrqNE",
  authDomain: "ecommerce-furniture-7e272.firebaseapp.com",
  projectId: "ecommerce-furniture-7e272",
  storageBucket: "ecommerce-furniture-7e272.appspot.com",
  messagingSenderId: "724155003131",
  appId: "1:724155003131:web:8debe4640c57b3aa97005e",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);
export default app;
