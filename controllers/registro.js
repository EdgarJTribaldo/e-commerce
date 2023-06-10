import { clientServices } from "../service/client_service.js"

const registerForm = document.querySelector("[data-form]"); 
registerForm.addEventListener('submit', (event) => {
  event.preventDefault();

  const userRegister = {
    user: registerForm.usuario.value,
    email: registerForm.email.value,
    pass: registerForm.contraseña.value,
  };


  clientServices.createClient(userRegister.user, userRegister.email).then( response  => {
  }).catch(error => console.log(error))
} );



