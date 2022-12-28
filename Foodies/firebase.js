// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCLBcguqvGcsjE9TO9yI_xxY_Ffu5SLdMs",
  authDomain: "foodies-10.firebaseapp.com",
  projectId: "foodies-10",
  storageBucket: "foodies-10.appspot.com",
  messagingSenderId: "344183997790",
  appId: "1:344183997790:web:151e7084aaa25c8d793bcf"
};

// Initialize Firebase
!firebase.apps.length ? firebase.initializeApp(firebaseConfig):firebase.app()

const db = firebase.firestore();

export {firebase,db};
// const app = initializeApp(firebaseConfig);