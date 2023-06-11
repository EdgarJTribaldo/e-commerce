import { clientService } from "../service/client_service.js"

const registerForm = document.querySelector("[data-form]"); 
registerForm.addEventListener('submit', (event) => {
  event.preventDefault();

  const userRegister = {
    name: registerForm.usuario.value,
    email: registerForm.email.value,
    pass: registerForm.contraseña.value,
  };

  console.log(userRegister.pass);

  clientService.createClient(userRegister).then( response  => {
    window.location.href = "./login_test.html"
  }).catch(error => console.log(error))
} );




