// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAGS3D0rVJs3PqJG_XL5xWP0iydQgtJILc",
    authDomain: "click-it-anuapan9.firebaseapp.com",
    projectId: "click-it-anuapan9",
    storageBucket: "click-it-anuapan9.appspot.com",
    messagingSenderId: "927141509113",
    appId: "1:927141509113:web:8aaa0693818e2905062f28"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)

export default auth;