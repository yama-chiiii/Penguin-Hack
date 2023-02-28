// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDrDlUVnRNbEPnEpJ4XODIHgCER2yI-Nmg",
    authDomain: "mentalhealth-a6994.firebaseapp.com",
    projectId: "mentalhealth-a6994",
    storageBucket: "mentalhealth-a6994.appspot.com",
    messagingSenderId: "691191225747",
    appId: "1:691191225747:web:27e12ede1c3710635c5c66"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// export const auth = initializeAuth(app, {
//     persistence: browserSessionPersistence,
//     popupRedirectResolver: browserPopupRedirectResolver,
// });