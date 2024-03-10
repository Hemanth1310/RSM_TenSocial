// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getDatabase } from "firebase/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAbZGsV7lX2Wu6aHSiHgsAiBipCL_W8EuA",
  authDomain: "tenmake-89210.firebaseapp.com",
  projectId: "tenmake-89210",
  storageBucket: "tenmake-89210.appspot.com",
  messagingSenderId: "278571878676",
  appId: "1:278571878676:web:ef931cb1f0e756a90cda01",
  measurementId: "G-YBWTLF82KR"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

const db = getDatabase(app);

export { db };