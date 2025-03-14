// const $divContainer = $("#container");
// let datosPokemon;

// fetch("https://rickandmortyapi.com/api/character/?status=dead")
//   .then((res) => {
//     return res.json();
//   })
//   .then((res) => {
//     console.log(res);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

// QUERY todo lo que este despues del signo de pregunta, y se separan por un &

// Cuando haga onClick en el button siguiente pagina
// volver a realizar el fetch fetch("https://pokeapi.co/api/v2/pokemon?offset=0&limit=20")
// pero con la query modificada

/* 
let contadorPagina = 1
$buttonSigPagina.addEventListener("click", () => {
  contadorPagina += 1
  fetch(`https://rickandmortyapi.com/api/character/?page=${contadorPagina}`)
    .then()
  })
*/

// Create           Read            Update          Delete
// POST             GET             PUT             Delete

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
  let characters = []
  fetch(`https://rickandmortyapi.com/api/character?page=${page}`)    // funciones.obtenerDatosLocalStorage()
    .then(res => res.json())
    .then(response => {                                 
      characters = response.results;  
      pintarDatos(characters)                        //  pintarDatos
    })
    .catch(error => {
      $containerCards.innerHTML = ""
      // $containerCards.innerHTML = "<img src="">"
    })
}


window.onload = () => {
  obtenerDatos(currentPage)
};