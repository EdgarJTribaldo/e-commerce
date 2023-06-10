/*const http = new XMLHttpRequest();

http.open("GET", "http://localhost:3000/productos");

http.send();

http.onload = () => {
  const productos = JSON.parse(http.response);
  console.log(productos);
  productos.forEach(element => {
    console.log(element);
  });
}

*/
const form = document.querySelector('#search-form');
const productList = document.getElementById("product-list");
const searchInput = document.getElementById('productInput'); //Obtenemos la referencia al campo de búsqueda
const searchButton = document.querySelector('#search-button');
const searchResults = document.querySelector('#search_result');

searchResults.classList.add("search__result");


// Forma abreviada del fetch const listaClientes = () => fetch().then((respuesta) => respuesta.json());


fetch("http://localhost:3000/productos").then( (response) => { 
  if(!response.ok){
    throw new Error(`HTTP error: ${response.status}`);
  }
  // console.log(response);
  return response.json()})
.then( data => {
  // console.log(data);

  const starWarsProducts = data.filter(product => product.categoria === 'Star wars');
  starWarsProducts.forEach(product => {
    const listItem = document.createElement('li');
    listItem.style.listStyle = 'none';
    const img = document.createElement('img');
    const h3 = document.createElement('h3');
    const p = document.createElement('p');
    p.classList.add('precio_p');
    const button = document.createElement('button');
    button.classList.add('productBtn');
    img.src = product.imagen;
    img.alt = product.nombre;
    h3.textContent = product.nombre;
    p.textContent = `$${product.precio}`;
    button.textContent = 'Ver producto';
    listItem.appendChild(img);
    listItem.appendChild(h3);
    listItem.appendChild(p);
    listItem.appendChild(button);
    productList.appendChild(listItem);
  });
})
.catch(error => { console.error(`Fetch problem: ${error.message}`);
});


form.addEventListener('submit', (event) => {
  event.preventDefault();
  let input = document.getElementById("productInput");
  const searchTerm = input.value.trim(); // Get search term and remove whitespace
  searchProducts(searchTerm);
});

async function searchProducts(searchTerm) {
  try {
    const response = await fetch(`http://localhost:3000/productos?q=${searchTerm}`);
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const data = await response.json(); // Assuming your API returns the data in JSON format
    renderSearchResults(data);
  } catch (error) {
    console.error(`Fetch problem: ${error.message}`);
  }
}

function renderSearchResults(data) {
  searchResults.innerHTML = ''; // Clear any previously rendered results

  if (data.length === 0) {
    const message = document.createElement('p');
    message.textContent = 'No products found';
    searchResults.appendChild(message);
    return;
  }

  // Create a list of products
  const productList = document.createElement('ul');
  data.forEach(product => {
    const img = document.createElement("img");
    img.src = product.imagen;
    img.alt = product.nombre;
    const listItem = document.createElement('li');
    listItem.append(product.nombre, '-' ,product.precio, '-', img);
    productList.appendChild(listItem);
  });

  // Add the list to the search results div
  searchResults.appendChild(productList);
}

function redirectToPage() {
  window.location.href = "./index.html";
}


// REGISTER USER

const createClient = (userRegister) => {
  return fetch("https://64827715f2e76ae1b95b4304.mockapi.io/api/v1/products", {
    methot: "POST",

    // Los headers son un estandar para que el servidor sepa que tipo de archivos va a a recibir 
    headers: {
      "content-type": "application/json"
    },
    body: JSON.stringify( {
      name: userRegister.user,
      description: userRegister.email,
      contraseña: userRegister.pass,
    })
  })

  .then((response) => { 
    if(response.ok) {
      return response.json();
    }
    throw new Error("Network response was not ok.");
  })
  .then((jsonData) => {
    console.log(jsonData);
  })

  .catch((error) => {
    console.log("There was a problem with the fetch operation:", error);
  })
}

// export const clientServices = {
//   createClient
// }