// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCOog5DPPjvXlq6H9uqQ0QkBUMzMwrprPA",
  authDomain: "car-store-73d89.firebaseapp.com",
  projectId: "car-store-73d89",
  storageBucket: "car-store-73d89.appspot.com",
  messagingSenderId: "270633641557",
  appId: "1:270633641557:web:3d0fdcc1606886e34956dc"

  // apiKey: process.env.REACT_APP_apiKey,
  // authDomain: process.env.REACT_APP_authDomain ,
  // projectId: process.env.REACT_APP_projectId ,
  // storageBucket: process.env.REACT_APP_storageBucket ,
  // messagingSenderId: process.env.REACT_APP_messagingSenderId ,
  // appId: process.env.REACT_APP_appId 
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;