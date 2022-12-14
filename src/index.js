import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

const firebaseConfig = {
  apiKey: "AIzaSyDVfeIxG1YOikfsXVjBViYsz64LGxm3fe0",
  authDomain: "whereisbrian-82f6e.firebaseapp.com",
  projectId: "whereisbrian-82f6e",
  storageBucket: "whereisbrian-82f6e.appspot.com",
  messagingSenderId: "548883472518",
  appId: "1:548883472518:web:70c0ff88ed39a4d4213107",
  measurementId: "G-W92JLKEQCQ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);