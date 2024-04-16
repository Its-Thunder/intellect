import { getAuth } from "firebase/auth";
import { initializeApp } from "firebase/app";
import { collection, getFirestore } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyB-Bt2Pdsg5YxSpZRnLlJyInpkWeI5-tzo",
  authDomain: "intellect-meet.firebaseapp.com",
  projectId: "intellect-meet",
  storageBucket: "intellect-meet.appspot.com",
  messagingSenderId: "212898920143",
  appId: "1:212898920143:web:564159eca5e53fc86ca9ba",
  measurementId: "G-E7ZFZ0C7KW"
};
const app = initializeApp(firebaseConfig);
export const firebaseAuth = getAuth(app);
export const firebaseDB = getFirestore(app);

export const usersRef = collection(firebaseDB, "users");
export const meetingsRef = collection(firebaseDB, "meetings");
