import { clientService } from "../service/client_service.js"

fetch("https://64827715f2e76ae1b95b4304.mockapi.io/api/v1/users", {
  method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(login)
  })
    .then((response) => {
      if (response.ok) {
        // Redirect to the user dashboard after successful login
        window.location.href = '../index.html';
      } else {
        throw new Error('Network response was not ok.');
      }
    })
    .catch((error) => {
      console.error('Error:', error);
    });



const loginUser = document.querySelector("[data-form]"); 
loginUser.addEventListener('submit', (event) => {
  event.preventDefault();

  const login = {
    email: loginUser.email.value,
    pass: loginUser.contraseña.value,
  };

  console.log(login.pass);

  clientService.createClient(login).then( response  => {
    window.location.href = "./login_test.html"
  }).catch(error => console.log(error))
} );


