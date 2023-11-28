import { signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.4.0/firebase-auth.js" 
import {auth} from './firebase.js'
import {showMessage} from './showMessage.js'
const signinForm = document.querySelector('#login-form')
signinForm.addEventListener('submit', async e => {
    e.preventDefault()

    const email = signinForm['login-email'].value;
    const pass  = signinForm['login-pass'].value;
    
   
    try {
        const credentials = await signInWithEmailAndPassword(auth,email,pass);
        showMessage("Bienvenido de vuelta","success");

    } catch (error) {
        console.log(error);
        if (error.code === 'auth/invalid-login-credentials') {
            showMessage("El correo electrónico o la contraseña son incorrectas","error");
        }else{
            showMessage(error.message, 'error')
        }
    }
})