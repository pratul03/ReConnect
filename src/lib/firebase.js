import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_API_KEY,
  authDomain: "reactchat-f4f50.firebaseapp.com",
  projectId: "reactchat-f4f50",
  storageBucket: "reactchat-f4f50.appspot.com",
  messagingSenderId: "308040587149",
  appId: "1:308040587149:web:193de081109f6401778fc4",
};

export const app = initializeApp(firebaseConfig);

export const auth = getAuth();
export const db = getFirestore();
export const storage = getStorage();


