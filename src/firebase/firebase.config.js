import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBGgkaVNK3nusWZpDyWs_0SjKBhVDAMRpQ",
  authDomain: "real-state-assignment-50aec.firebaseapp.com",
  projectId: "real-state-assignment-50aec",
  storageBucket: "real-state-assignment-50aec.appspot.com",
  messagingSenderId: "458841664893",
  appId: "1:458841664893:web:4075d8f9e4b4017ec8b014"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;