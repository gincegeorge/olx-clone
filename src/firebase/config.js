// Import the functions you need from the SDKs you need
import firebase from 'firebase';
import 'firebase/storage'

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA5KL__n4o2u1fOmF05fHZBaNwgRWv_Uco",
  authDomain: "olx-clone-c181f.firebaseapp.com",
  projectId: "olx-clone-c181f",
  storageBucket: "olx-clone-c181f.appspot.com",
  messagingSenderId: "695460898706",
  appId: "1:695460898706:web:f05d380023fc279950c34b"
};

// Initialize Firebase
export default firebase.initializeApp(firebaseConfig)