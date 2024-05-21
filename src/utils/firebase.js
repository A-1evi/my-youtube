// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB3istlkDGMcXVqKKvqmgXmqOdZKPX8BnY",
  authDomain: "funtube-e54e9.firebaseapp.com",
  projectId: "funtube-e54e9",
  storageBucket: "funtube-e54e9.appspot.com",
  messagingSenderId: "15340759461",
  appId: "1:15340759461:web:d58bbf443a6d53d220204c",
  measurementId: "G-6TZFYW8WJD"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);