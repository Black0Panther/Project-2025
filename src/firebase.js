// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBQvebIGLrjbRtP8aqY-dQ-3olANFG5-uw",
  authDomain: "todo-4784b.firebaseapp.com",
  projectId: "todo-4784b",
  storageBucket: "todo-4784b.firebasestorage.app",
  messagingSenderId: "628415618020",
  appId: "1:628415618020:web:56a1ada61f69cfedbdc5f1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app); // ✅ Export auth
export default app;