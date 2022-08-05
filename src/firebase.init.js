// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB-4eiIFPmf8yh0LyMFYuGDU0euSP1vHbI",
  authDomain: "justprac-ca666.firebaseapp.com",
  projectId: "justprac-ca666",
  storageBucket: "justprac-ca666.appspot.com",
  messagingSenderId: "855402444469",
  appId: "1:855402444469:web:794ad4eb0fb633bd82f0fc"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth= getAuth(app);
export default auth;