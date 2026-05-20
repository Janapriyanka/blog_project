
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyBDKXfdXKIOAwhcyzq9uFlRsooWNLeyLkk",
  authDomain: "blog-app-adbb2.firebaseapp.com",
  projectId: "blog-app-adbb2",
  storageBucket: "blog-app-adbb2.firebasestorage.app",
  messagingSenderId: "228414073891",
  appId: "1:228414073891:web:d866d910e1b0867814d596"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth=getAuth(app);
export default  auth ;