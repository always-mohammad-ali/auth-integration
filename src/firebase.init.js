// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBBzDNkcjo3Dr9JkWE7nsaEdy5oPbizsws",
  authDomain: "auth-integration-19e9b.firebaseapp.com",
  projectId: "auth-integration-19e9b",
  storageBucket: "auth-integration-19e9b.firebasestorage.app",
  messagingSenderId: "285879816824",
  appId: "1:285879816824:web:c9bcb9b25fbe349136d38d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);