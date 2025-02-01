import datos from "./datos.js";

function $(selector) {
  return document.querySelector(selector);
}

function $$(selector) {
  return document.querySelectorAll(selector);
}

/* Al seleccionar la opcion correspondiente, filtrar por su genero. Hacer lo mismo con species (Human y no human) y casa */

const $main = $("main")
const $selectMenuGender = $("#menuGender")

const capitalize = str => str.charAt(0).toUpperCase() + str.slice(1);

function pintarDatos(arrayPersonajes) {
  $main.innerHTML = "";
  for (const { image, name, species, house, gender, alive, alternate_names } of arrayPersonajes) {
    $main.innerHTML += `<div class="flex flex-col justify-center items-center border border-2 border-black rounded-xl w-5/6 md:w-5/12 lg:w-3/12 mx-8 my-2 h-72">
      <img src="${image}" class="h-24 w-24">
      <p>Nombre: ${capitalize(name)}</p>
      <div class="flex flex-row justify-around w-full flex-wrap">
        <p class="w-2/5">Especie: ${capitalize(species)}</p>
        <p class="w-2/5">Casa: ${capitalize(house)}</p>
        <p class="w-2/5">Genero: ${capitalize(gender)}</p>
        <p class="w-2/5">Vivo: ${alive ? "Si, esta vivito" : "No, se despidio"}</p>
      </div>
      <p>Nombres Alt: ${alternate_names.length > 0 ? alternate_names : "No tiene nombres alternativos"}</p>
    </div>`
  }
}

// const numeros = [865,8789,65,98789]
// numerosMayores a 1000 
// const numerosMayores1000 = numeros.filter(elem => elem > 1000)

$selectMenuGender.addEventListener("input", () => {
  if($selectMenuGender.value !== 'all') {
    const personajesFiltrados = datos.filter(personaje => personaje.gender === $selectMenuGender.value)
    pintarDatos(personajesFiltrados)
  } else {
    pintarDatos(datos)
  }
})


window.onload = () => {
  pintarDatos(datos)
}

/* funciones que manipulan el DOM y otras funciones que manipulan los datos */