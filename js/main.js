import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.7/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.6.7/firebase-auth.js";
const signupForm = document.querySelector("#signup-form");

const firebaseConfig = {
  apiKey: "AIzaSyDnHWad92kGz6HnLsLVNq_3n2WLbMRx1ew",
  authDomain: "ar-6c5e4.firebaseapp.com",
  databaseURL: "https://ar-6c5e4-default-rtdb.firebaseio.com",
  projectId: "ar-6c5e4",
  storageBucket: "ar-6c5e4.appspot.com",
  messagingSenderId: "830972966952",
  appId: "1:830972966952:web:21aa0922329b91fd0e5d1d",
  measurementId: "G-F0BPDWG0VP"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth();


signupForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const email = document.querySelector("#signup-email").value;
  const password = document.querySelector("#signup-password").value;

  createUserWithEmailAndPassword(auth, email, password)
      .then(userCredential => {
        console.log('signup success')
  })
})
