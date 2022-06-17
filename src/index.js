// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
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

createUserWithEmailAndPassword(auth, email, password)
    .then(user => {
        const user = userCredential.user;
        console.log(user);
    }
    )
    .catch(error => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(error);
    }
    );

signInWithEmailAndPassword(auth, email, password)
    .then(user => {
        const user = userCredential.user;
        console.log(user);
    }
    )
    .catch(error => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(error);
    }
    );
    
onAuthStateChanged(auth, (user) => {
    if (user) {
        // User is signed in.
        const displayName = user.displayName;
        const email = user.email;
        const emailVerified = user.emailVerified;
        const photoURL = user.photoURL;
        const isAnonymous = user.isAnonymous;
        const uid = user.uid;
        const providerData = user.providerData;
        console.log(user);
    } else {
        // User is signed out.
        // ...
    }
}
);

const functions = require('firebase-functions');

exports.makeUppercase = functions.firestore.document('/messages/{documentId}')
    .onCreate((snap, context) => {
      const original = snap.data().original;
      console.log('Uppercasing', context.params.documentId, original);
      const uppercase = original.toUpperCase();
      return snap.ref.set({uppercase}, {merge: true});
    });


connectAuthEmulator(auth, "http://localhost:9099");
