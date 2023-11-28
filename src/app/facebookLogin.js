import { FacebookAuthProvider, signInWithPopup} from "https://www.gstatic.com/firebasejs/10.4.0/firebase-auth.js" 
import { auth} from './firebase.js'
import { showMessage } from "./showMessage.js";
const facebookButton = document.querySelector('#facebookLogin');
facebookButton.addEventListener('click', async() => {
    const provider = new FacebookAuthProvider()
    try {
        const credentials = await signInWithPopup(auth, provider);
        console.log(credentials)
        showMessage("Bienvenido de vuelta "+credentials.user.displayName,"success");
    } catch (error) {
        showMessage("Ha ocurrido un error, intente más tarde ", "error");
    }
  
    
})