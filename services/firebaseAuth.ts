// Import the functions you need from the SDKs you need

import { getApps, initializeApp } from "firebase/app";
import { Auth, getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCFOWite6orCjz_R9ZunL1X8NflWRrTbEg",
    authDomain: "my-app-c3d5c.firebaseapp.com",
    projectId: "my-app-c3d5c",
    storageBucket: "my-app-c3d5c.firebasestorage.app",
    messagingSenderId: "475380551018",
    appId: "1:475380551018:web:1ffad336cd0b90c27b6913"
};

// Initialize Firebase
let auth: Auth;

if (getApps().length === 0) {
    const app = initializeApp(firebaseConfig);
    auth = getAuth(app);
} else {
    auth = getAuth();
}

export default auth;



