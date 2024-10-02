// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getAuth } from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA6SyvYy2MElnSX3070yocz7016V9pAYvo",
  authDomain: "loginsignup-36df0.firebaseapp.com",
  projectId: "loginsignup-36df0",
  storageBucket: "loginsignup-36df0.appspot.com",
  messagingSenderId: "567040765446",
  appId: "1:567040765446:web:e1cf63f974e8cd2baddd87",
  measurementId: "G-RYXSH2J0M2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
const auth = getAuth(app);

export default auth;