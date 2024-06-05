// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBn2Wr6RpCL9VsvcRypEDRjEB3mGZ2qCAA",
  authDomain: "netflixgpt-a2a67.firebaseapp.com",
  projectId: "netflixgpt-a2a67",
  storageBucket: "netflixgpt-a2a67.appspot.com",
  messagingSenderId: "168887155584",
  appId: "1:168887155584:web:e783c7a8d431e74797df65",
  measurementId: "G-PTLNMM50GP"
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth()


