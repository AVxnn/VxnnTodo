import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCF70j5euHIXIPLH2Pqp8oGtqwXUla-MPg",
  authDomain: "todospace-14743.firebaseapp.com",
  projectId: "todospace-14743",
  storageBucket: "todospace-14743.appspot.com",
  messagingSenderId: "47238095087",
  appId: "1:47238095087:web:7be1c1e2c21db765fabb1a",
  measurementId: "G-Z6B17DYPJE"
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);