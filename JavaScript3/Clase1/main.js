//    CALLSTACK
//
// console.log(1);

// function hola() {
// console.log(5)
// }

// hola()
// setTimeout(() => {
//   console.log(2);
// }, 5000);

// console.log(3);

/* const conductor = "LE PARECIO POCO DINERO";

let loadingPedido = false;

loadingPedido = true;
new Promise((resolve, reject) => {
  if (conductor === "EXITOSO") {
    resolve("Pedido entregado");
  } else {
    reject("Pedido no entregado");
  }
})
  .then((res) => {
    // SI SE CUMPLE ENTRA ACA
    divSectionCentral.innerHtml; // mostra la serie
  })
  .catch((err) => {
    // SI FALLA ENTRA ACA
    divSectionCentral.innerText = "Recargue la pagina"; // Ok mostra mas bonito
  })
  .finally(() => {
    loadingPedido = false;
  }); */

// SI UNA PROMESA ESTA EN PROCESO DE CUMPLIRSE O NO ========> Esta en estado PENDING
// SI UNA PROMESA SE CUMPLE ========> Esta en estado FULLFILLED
// SI UNA PROMESA NO SE CUMPLE ========> Esta en estado REJECT

// const conductorALocal = "Llego al local de comida";
// const conductorACasa = "Llego";

// let loadingPedido = false;

// loadingPedido = true;
// /* function saludar() {
//   return function () {
//     return "Hola";
//   };
// }
// const pepe = saludar();
// const cosa = pepe(); */
// new Promise((resolve, reject) => {
//   if (conductorALocal === "Llego al local de comida") {
//     resolve(
//       new Promise((resolve, reject) => {
//         if (conductorACasa === "Llego") {
//           resolve("Pedido completado");
//         } else {
//           reject("Pedido frustrado");
//         }
//       })
//     );
//   } else {
//     reject("Pedido no entregado");
//   }
// })
//   .then((res) => {
//     // SI SE CUMPLE ENTRA ACA
//     res
//       .then((resolution) => {
//         console.log("resolution");
//       })
//       .catch((error) => {
//         console.log(error);
//       });
//   })
//   .catch((err) => {
//     // SI FALLA ENTRA ACA
//     divSectionCentral.innerText = "Recargue la pagina"; // Ok mostra mas bonito
//   })
//   .finally(() => {
//     loadingPedido = false;
//   });

// new Promise((resolve, reject) => {
//   if (conductorALocal === "Llego al local de comida") {
//     resolve(5);
//   } else {
//     reject("Pedido no entregado");
//   }
// })
//   .then((res) => {
//     // SI SE CUMPLE ENTRA ACA
//     const suma = res + 15; // 20
//   })
//   .catch((err) => {
//     // SI FALLA ENTRA ACA
//     divSectionCentral.innerText = "Recargue la pagina"; // Ok mostra mas bonito
//   })
//   .finally(() => {
//     loadingPedido = false;
//   });

const $divContainer = $("#container");
let datosPokemon;

fetch("https://pokeapi.co/api/v2/pokemon/ditto")
  .then((res) => {
    return res.json();
  })
  .then((res) => {
    $divContainer.innerHTML = `<div><h1>${res.name}</h1></div>`;
  })
  .catch((err) => {
    $divContainer.innerHTML = `<h1>Ocurrio un error, por favor recargue o contactese con Ro Lobruno para que le solucione el problea</h1>`;
  });
