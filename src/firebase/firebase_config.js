// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDLOzzD_tF9Ky93G3EYNQAfd2_KDTKh1sA",
  authDomain: "sessions-auth-firebase.firebaseapp.com",
  projectId: "sessions-auth-firebase",
  storageBucket: "sessions-auth-firebase.appspot.com",
  messagingSenderId: "390399830843",
  appId: "1:390399830843:web:a142074b03ab32a868e51e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
export default auth