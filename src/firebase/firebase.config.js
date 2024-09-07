// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAg76Xl2NqxGIb4jQr8Bkmm-Qv4vmF-TwA",
  authDomain: "assignment-10-5d2f6.firebaseapp.com",
  projectId: "assignment-10-5d2f6",
  storageBucket: "assignment-10-5d2f6.appspot.com",
  messagingSenderId: "980895400087",
  appId: "1:980895400087:web:537d7263fb4476dfade9d2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;