import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
import { getFirestore } from "firebase/firestore";



const firebaseConfig = {
  apiKey: "AIzaSyCrZqcq6FomQpP3TWVbH0UJcTlfVRiH3Jo",
  authDomain: "yoga-retreat-cee11.firebaseapp.com",
  projectId: "yoga-retreat-cee11",
  storageBucket: "yoga-retreat-cee11.firebasestorage.app",
  messagingSenderId: "889462313768",
  appId: "1:889462313768:web:e05e2d4ed43ec68b0fb61d",
  measurementId: "G-J2J5BZCN0G"
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

const db = getFirestore(app);

export { db };

export { app, auth };