// Import the functions you need from the SDKs you need

import { initializeApp } from "firebase/app";

// TODO: Add SDKs for Firebase products that you want to use

// https://firebase.google.com/docs/web/setup#available-libraries


// Your web app's Firebase configuration

const firebaseConfig = {

  apiKey: "AIzaSyAi49X0BdGIGmub183fYqJ-ULQI_JSNDVw",

  authDomain: "mern-vite-blog.firebaseapp.com",

  projectId: "mern-vite-blog",

  storageBucket: "mern-vite-blog.appspot.com",

  messagingSenderId: "929437363872",

  appId: "1:929437363872:web:a4e5a9829f28ba06b823c5"

};


// Initialize Firebase

export const app = initializeApp(firebaseConfig);