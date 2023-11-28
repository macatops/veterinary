import { onAuthStateChanged } from "https://www.gstatic.com/firebasejs/10.4.0/firebase-auth.js"
import { auth } from './app/firebase.js'
import {loginCheck} from './app/loginCheck.js'
import './app/signupForm.js';
import './app/signinForm.js'
import './app/logout.js';  
import './app/googleLogin.js'
import './app/facebookLogin.js'
import './app/githubLogin.js'

//Importar significa obtener datos
// Exportar envia datos
onAuthStateChanged(auth, async (user) => {
// if (user){
    loginCheck(user)
// }else{

// }
})
