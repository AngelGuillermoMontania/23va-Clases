import datosJS from "./datos.js";
let datosLS = [];  // Paso 1        []

function $(selector) {
  return document.querySelector(selector);
}

function $$(selector) {
  return document.querySelectorAll(selector);
}

/* Al seleccionar la opcion correspondiente, filtrar por su genero. Hacer lo mismo con species (Human y no human) y casa */

const $sectionContainCards = $("#contain-cards");
const $selectMenuGender = $("#menuGender");
const $form = $("#form")

const capitalize = (str) => str.charAt(0).toUpperCase() + str.slice(1);

function pintarDatos(arrayPersonajes) {
  $sectionContainCards.innerHTML = "";
  for (const { image, name, species, house, gender, alive, dateOfBirth } of arrayPersonajes) {
    $sectionContainCards.innerHTML += `<div class="flex flex-col justify-center items-center border border-2 border-black rounded-xl w-5/6 md:w-5/12 lg:w-3/12 mx-8 my-2 h-72">
      <img src="${image}" class="h-24 w-24">
      <p>Nombre: ${capitalize(name)}</p>
      <div class="flex flex-row justify-around w-full flex-wrap">
        <p class="w-2/5">Especie: ${capitalize(species)}</p>
        <p class="w-2/5">Casa: ${capitalize(house)}</p>
        <p class="w-2/5">Genero: ${capitalize(gender)}</p>
        <p class="w-2/5">Nacimiento: ${dateOfBirth ? dateOfBirth : "Desconocido"}</p>
        <p class="w-2/5">Vivo: ${alive ? "Si, esta vivito" : "No, se despidio"}</p>
      </div>
    </div>`;
  }
}

$selectMenuGender.addEventListener("input", () => {
  const todosLosDatos = [...datosJS, ...datosLS]
  if ($selectMenuGender.value !== "all") {
    const personajesFiltrados = todosLosDatos.filter((personaje) => personaje.gender === $selectMenuGender.value);
    pintarDatos(personajesFiltrados);
  } else {
    pintarDatos(todosLosDatos);
  }
});

$form.addEventListener("submit", (event) => {
  event.preventDefault()

  // Agregar lo que esta en todos los inputs, a un array. Y luego actualizar el LS
  datosLS.push({
    image: event.target[0].value,
    name: event.target[1].value,
    species: event.target[2].value,
    gender: event.target[3].value,
    house: event.target[4].value,
    dateOfBirth: dayjs(event.target[5].value).format("DD-MM-YYYY")
  })
  
  localStorage.setItem("personajes", JSON.stringify(datosLS))
  
  pintarDatos([...datosJS, ...datosLS])
})

// En LS guardaremos solo los creados por el usuario
window.onload = () => {
  datosLS = JSON.parse(localStorage.getItem("personajes"))  // Dos caminos     1. null        2. [{name, image}] !== null
  if(datosLS !== null) {   
    pintarDatos([...datosJS, ...datosLS])
  } else {
    datosLS = []    // PASO 3    
    pintarDatos(datosJS);
  }
};



