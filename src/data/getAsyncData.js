import products from "./data"

function getAsyncData() {
  console.log("Solicitando datos")
  
  const promiseData = new Promise( (resolve, reject) => { 
    const errorFatal = false;

    setTimeout( () => {
      if (errorFatal) reject("Algo salió mal!!!!")

      console.log("Promesa Terminada")
      resolve(products)
    }, 2000)     
  })

  console.log("Promesa generada.")

  return promiseData;
}

export default getAsyncData;
export function getAsyncItemById(id) {
  return new Promise((resolve, reject) => {
    const product = products.find((item) => item.id === id);
    if (product) {
      resolve(product);
    } else {
      reject("Producto no encontrado");
    }
  });
}
