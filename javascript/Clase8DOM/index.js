// BOM   ====>   Trabaja con el navegador ---- prompt, alert, confirm
// DOM   ====>   HTML
// DOM: Document Object Model

// console.log(window) // BOM
// console.log(document) // DOM

// const seccionHero = document.querySelector(".hero")
// const titulo = document.querySelector("#titulo")
// const imagen = document.querySelector("img")
// console.slog(seccionHero)
// console.slog(titulo)
// console.log(imagen)

/* LIMITACIONES DEL QUERYSELECTOR 
  - Selecciona solo el primero
*/

// const elementosClaseHero = document.querySelectorAll(".hero")
/* LIMITACIONES DEL QUERYSELECTORALL
  - No puedo seleccionar uno solo
*/
// console.log(elementosClaseHero)


/* LIMITACIONES DEL getElement
  - Es bastante especifico
  - Se presta a errores
  - Tengo que acordarme con cual se selecciona cual
  - Con clases o etiquetas estoy obligado a seleccionar todas las clases o etiquetas
*/
// const titulo = document.getElementById("titulo")
// const seccionHero = document.getElementsByClassName("hero")
// const imagenes = document.getElementsByTagName("img")

// const imagenUsuario = document.querySelector("#imagenUsuario")
// // if(imagenUsuario tiene un valor) {
//   const imagenMeme = document.querySelector("#imagenMeme")
// // imagenMeme.src = valor de la imagenUsuario
// //
// //}


// const heroContainer = document.querySelector(".hero")
// heroContainer.classList.add("hero2")
// heroContainer.classList.remove("hero")
// heroContainer.classList.toggle("hola")
// heroContainer.classList.contains("hola")



// const body = document.querySelector("body");

// /* CUANDO ME HAGAN CLICK EN EL BOTON X */

// if(body.classList.contains("modo-claro")) {
//   body.classList.remove("modo-claro");
//   body.classList.add("modo-oscuro");
// } else {
//   body.classList.remove("modo-oscuro");
//   body.classList.add("modo-claro");
// }

/* ------------- INNERTEXT E INNERHTML ------- */
// const container = document.querySelector("#container")
// container.innerText = "<p>Hola! Somos la comi 23va</p>"

// const container = document.querySelector("#container")
// container.innerHTML = "<p>Hola! Somos la comi 23va</p>"

// const container = document.querySelector("#container")
// const inputNombrePersona = document.querySelector("#nombrePersona")

const containHero = document.querySelector(".hero")
containHero.style.backgroundColor = "red"
containHero.style.boxShadow = "5px 5px 10px black"
containHero.style.filter = `brightness(1)`