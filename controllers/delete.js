const eliminar =  (id) => {

  return fetch('url${id}', {
    method: "DELETE",

  });

}