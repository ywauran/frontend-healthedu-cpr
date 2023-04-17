// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCo64iXdoweNGJG3gVf1SiOSBeBGQGkMVw",
  authDomain: "healthedu-cpr.firebaseapp.com",
  databaseURL: "https://healthedu-cpr-default-rtdb.firebaseio.com",
  projectId: "healthedu-cpr",
  storageBucket: "healthedu-cpr.appspot.com",
  messagingSenderId: "269890903657",
  appId: "1:269890903657:web:2690090e35eadd9dbfccf8",
  measurementId: "G-WHXCKBP0FG",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
