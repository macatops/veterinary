// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.4.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.4.0/firebase-auth.js" //estas son bibliotecas de firebase, como no estoy usando el modulo tal cual, dentro del arreglo lo autentico, eso es lo que hace el get
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAmXMw_s2vCePloWWwZ--qAg21BL4CplvQ",
  authDomain: "login-addai.firebaseapp.com",
  projectId: "login-addai",
  storageBucket: "login-addai.appspot.com",
  messagingSenderId: "175072280958",
  appId: "1:175072280958:web:af87da19d33b68d029b32f"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app); //Esta aplicacion tiene activada ahora la forma de autentificar y lo transformo a una constante para que esta pueda autentificar usuarios