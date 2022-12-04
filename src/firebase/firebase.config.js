import { initializeApp } from "firebase/app";


const firebaseConfig = {
  apiKey: "AIzaSyBeywYb7j9xnQHVPGM93_tlwvokippBzOQ",
  authDomain: "ema-john-33bcf.firebaseapp.com",
  projectId: "ema-john-33bcf",
  storageBucket: "ema-john-33bcf.appspot.com",
  messagingSenderId: "288502568208",
  appId: "1:288502568208:web:12f9c227554bf7ade44195"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

export default firebaseApp;