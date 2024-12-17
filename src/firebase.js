// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCAQ2VgDYTmNay6DB7Qo72Ic7iqxqXoywE",
  authDomain: "cinema-ec579.firebaseapp.com",
  projectId: "cinema-ec579",
  storageBucket: "cinema-ec579.firebasestorage.app",
  messagingSenderId: "318001929318",
  appId: "1:318001929318:web:45995efd8cbd26fa27a1a7",
  measurementId: "G-FGNB1S34Y7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);