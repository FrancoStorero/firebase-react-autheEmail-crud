// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDTHVutZH0nbpcR_1wL8yL9KLji6jpo6NQ",
  authDomain: "fir-react-crud-auth.firebaseapp.com",
  projectId: "fir-react-crud-auth",
  storageBucket: "fir-react-crud-auth.appspot.com",
  messagingSenderId: "316014837800",
  appId: "1:316014837800:web:95e8f2b86759bee492b51d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore()

export { app, db }