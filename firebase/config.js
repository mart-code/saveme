// firebase/config.js
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyBv4oxDRRmuu1cakLT843sk_hdTWarQTGI",
  authDomain: "healthapp-36186.firebaseapp.com",
  projectId: "healthapp-36186",
  storageBucket: "healthapp-36186.appspot.com",
  messagingSenderId: "191236326014",
  appId: "1:191236326014:web:71659d70f0efce97c60e2f",
  measurementId: "G-WS5SBSBGXK"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth, app };