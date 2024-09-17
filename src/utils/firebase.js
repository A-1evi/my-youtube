// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBbT9wv9aTqc84L8zYYY--WuexSttiW4Dg",
  authDomain: "clone-89d06.firebaseapp.com",
  projectId: "clone-89d06",
  storageBucket: "clone-89d06.appspot.com",
  messagingSenderId: "881528694889",
  appId: "1:881528694889:web:3c31128a8d70092702daf8",
  measurementId: "G-3MDM28CNJT"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);