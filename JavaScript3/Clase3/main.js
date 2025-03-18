// Create           Read            Update          Delete
// POST             GET             PUT             DELETE

const $ = (elem) => document.querySelector(elem);

const $containerCards = $("#container-cards");
const $buttonPaginaAnterior = $("#back-page")
const $buttonPaginaSiguiente = $("#next-page")

let currentPage = 1;

function pintarDatos(arrayPersonajes) {
  $containerCards.innerHTML = ""
  for (const personaje of arrayPersonajes) {
    console.log(personaje)
    $containerCards.innerHTML += `<div><img src="${personaje.image}"><h3>${personaje.name}</h3></div>`
  }
}

$buttonPaginaSiguiente.addEventListener("click", () => {
  currentPage += 1
  obtenerDatos(currentPage)
})

$buttonPaginaAnterior.addEventListener("click", () => {
  currentPage -= 1
  obtenerDatos(currentPage)
})

function obtenerDatos(page) {
  let pokemones = []
  fetch(`https://pokeapi.co/api/v2/pokemon`)    // funciones.obtenerDatosLocalStorage()
    .then(res => res.json())
    .then(response => {                               
      pokemones = response.results;
      const promesasPokemones = pokemones.map((elem) => fetch(elem.url))    // [fetch(primerP.url), fetch(segundoP.url)]
      Promise.all(promesasPokemones)   //   [{respuesta}, {respuesta}, {respuesta}]
        .then(res => Promise.all(res.map(elem => elem.json())))
        .then(resolve => {
          console.log(resolve)
        })
          .catch(error => console.log(error))
      // pintarDatos(characters)                        //  pintarDatos
    })
    .catch(error => {
      $containerCards.innerHTML = ""
      // $containerCards.innerHTML = "<img src="">"
    })
}

window.onload = () => {
  obtenerDatos(currentPage)
};


// ♥♥♥♥♥♥♥♥♥♥♥♥♥♥♥♥♥♥♥♥ Promise.all(arrayDePromesas) ♥♥♥♥♥♥♥♥♥♥♥♥♥♥♥♥♥♥♥♥♥♥♥♥♥♥♥♥
//   Pro's
// - Cuando necesito realizar muchas promesas a la vez
// - Optimisa y agiliza el codigo y realiza las consultas al mismo tiempo
// - Acorta cantidad de codigo

//  Contras
// - Si una de las promesa falla.