// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey            : "AIzaSyAi7tfYZxIQAFQOWwyE9fBYMRpFTEvEdKE",
  authDomain        : "where-s-waldo-9cbb0.firebaseapp.com",
  projectId         : "where-s-waldo-9cbb0",
  storageBucket     : "where-s-waldo-9cbb0.appspot.com",
  messagingSenderId : "847085831069",
  appId             : "1:847085831069:web:c1d9a86ab326d0d42b2574",
  measurementId     : "G-9MMFKRH442"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
