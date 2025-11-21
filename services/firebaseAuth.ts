// Import the functions you need from the SDKs you need

import { getApps, initializeApp } from "firebase/app";
import { Auth, getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "enter-your-api-key-here",
    authDomain: "enter-your-auth-domain-here",
    projectId: "enter-your-project-id-here",
    storageBucket: "enter-your-storage-bucket-here",
    messagingSenderId: "enter-your-messaging-sender-id-here",
    appId: "enter-your-app-id-here"
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



