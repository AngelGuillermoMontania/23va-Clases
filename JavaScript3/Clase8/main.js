// let tipoBusqueda = "characters"


/* 
OPCION 1 - No recomendado
function buscarDatosPersonajes() {
  axios(`www.marvel-maldicion-arreglalo/characters`)
}

function buscarDatosComics() {
  axios(`www.marvel-maldicion-arreglalo/comics`)
}


DOMContentLoaded    => document cargue el contenido
document.onload     => document cuando tenrmine de cargar el documento



selecciono la opcion de comics


$inputSelect.addEventListener("input", (e) => {
  if(e.value) {
    tipoBusqueda = "comics"
  } else {
    tipoBusqueda = "characters"
  }

  obtenerDatos(tipoBusqueda)
})


OPCION 2 - RECOMENDADO
function obtenerDatos(tipo) {
  axios(`www.marvel-maldicion-arreglalo/${tipo}`)
}

*/


const $ = elem => document.querySelector(elem)
const $$ = elem => document.querySelectorAll(elem)

const $inputCity = $("#inputCity")
const $btnSearch = $("#search")
const $sectionCity = $("#section-city")

// https://api.openweathermap.org/data/2.5/weather?q=san%20juan&lang=es&appid=4f3c88ba651a35b3eda9f05221decec6

$btnSearch.addEventListener("click", async () => {
  
  $sectionCity.innerHTML = `<div class="loader"></div>`
  try {
    const { data } = await axios(`https://api.openweathermap.org/data/2.5/weather?q=${$inputCity.value}&lang=es&units=metric&appid=4f3c88ba651a35b3eda9f05221decec6`)
    $sectionCity.innerHTML = ``
    pintarDatos(data)
  } catch (error) {
    $sectionCity.innerHTML = ``
    console.log(error)
  }
})

function pintarDatos(obj) {
  $sectionCity.innerHTML = `<h1>${obj.name}</h1><h5>Temperatura actual: ${obj.main.temp}</h5>`
}