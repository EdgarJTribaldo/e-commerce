//En los controllers manipulamos los datos que recibimos de nuestras llamadas al servidor las cuales son hechas desde la carpeta de servicios.

// const listaProductos = () => { fetch("url_api").then(respuesta => respuesta.json()).catch(error => console.log(error))
//   };

// CREAR PRODUCTOS SERVICIOS.
// Crear un POST para registrar productos

const crearProductos = (imageURL, name, price) => {
  fetch("url", {
  method: "POST",
  headers: {
    "content-type": "application/json"
  },
  body: JSON.stringify({
    imageURL, 
    price, 
    name
  })
}).then(response => {
  if(response.ok) {
    return response.body;
  }
})
throw new Error("No se pudo crear el producto");
}

export const clienteServices = {
  crearProductos
};





// CREAR PRODUCTOS CONTROLLER

const form = document.querySelector("[data-form]");
form.addEventListener("subtmit", (event) => {
  event.preventDefault;
  const dataForm = {
    image: form.imageURL,
    name: form.name,
    price: form.price
  }

  clienteServices.crearProductos(dataform.image, dataForm.name, dataform.price)
  .then(respuesta => {
    window.location.href = "screen.html";
  }).catch((error) => console.log(error));
})


