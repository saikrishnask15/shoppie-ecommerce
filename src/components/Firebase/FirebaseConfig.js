// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC-HlLftHDPlYOQECFXFHkKTnE9zb9Y8Z4",
  authDomain: "shoppie-ecommerce-3999a.firebaseapp.com",
  projectId: "shoppie-ecommerce-3999a",
  storageBucket: "shoppie-ecommerce-3999a.appspot.com",
  messagingSenderId: "899930844945",
  appId: "1:899930844945:web:dc7ef32bb454157946a6b0"
};

// Initialize Firebase
 const app = initializeApp(firebaseConfig);
 const auth = getAuth(app);
  export {auth};