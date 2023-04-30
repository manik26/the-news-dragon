// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDn7OjDZNx6Oe5tYvMhJyYGLNlXBOXpHEM",
  authDomain: "the-news-dragon-cc518.firebaseapp.com",
  projectId: "the-news-dragon-cc518",
  storageBucket: "the-news-dragon-cc518.appspot.com",
  messagingSenderId: "1040117627893",
  appId: "1:1040117627893:web:10c74b0e917dc845c63ebc"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;