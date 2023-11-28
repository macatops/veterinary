 import { createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.4.0/firebase-auth.js" //importo porque voy a usar un metodo llamado, este metodo permite autentificar con gmail y correo
 import { auth } from './firebase.js'
 import {showMessage} from './showMessage.js'
const registerForm = document.querySelector('#register-form');
registerForm.addEventListener('submit', async (e) => { //estpy usando promesa en el asyn y await
    e.preventDefault()
     const name = registerForm['signup-name'].value;
    const email = registerForm['signup-email'].value;
    const password = registerForm['signup-password'].value;
     console.log(password,email)

    //Puro manejo de errores padresantote

    try{
       const userCredentials = await createUserWithEmailAndPassword(auth,email,password)
    console.log(userCredentials)  
    showMessage("¡Te damos la bienvenida! "+name, "success");
    }catch (error) {
        console.log(error);
        console.log(error.message)
        console.log(error.code)
        if (error.code === 'auth/invalid-email') {
            showMessage("El correo electrónico es inválido","error");
        }else if (error.code === 'auth/weak-password') {
            showMessage("La contraseña es muy corta","error");
        }else if (error.code === 'auth/email-already-in-use') {
            showMessage("El correo electrónico ya está en uso","error");
        }else if (error.code){
            showMessage("Algo salió mal, por favor inténtelo de nuevo o más tarde","error");
        }
    }

   
})