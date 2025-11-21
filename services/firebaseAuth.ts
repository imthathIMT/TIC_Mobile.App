// Import the functions you need from the SDKs you need

import { getApps, initializeApp } from "firebase/app";
import { Auth, getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAEd26rPWLP9kCgWUSX0rYxjCUm4l-Pg94",
    authDomain: "react-native-auth-demo-3419f.firebaseapp.com",
    projectId: "react-native-auth-demo-3419f",
    storageBucket: "react-native-auth-demo-3419f.firebasestorage.app",
    messagingSenderId: "241835727834",
    appId: "1:241835727834:web:6acf94e8aac5348bc83ee3"
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



