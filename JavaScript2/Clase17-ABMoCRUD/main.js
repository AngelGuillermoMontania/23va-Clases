import datosJS from "./datos.js";
let todosLosDatos = []

function $(selector) {
  return document.querySelector(selector);
}

function $$(selector) {
  return document.querySelectorAll(selector);
}

/* Al seleccionar la opcion correspondiente, filtrar por su genero. Hacer lo mismo con species (Human y no human) y casa */
const $sectionContainCards = $("#contain-cards");
const $selectMenuGender = $("#menuGender");
const $form = $("#form");
const $sectionList = $("#section-list");
const $containModalX = $("#contain-modal-x");
const $buttonViewHome = $("#button-view-home");
const $buttonViewCreate = $("#button-view-create");
const $buttonModal = $("#button-view-modal");
const $editForm = $(".edit-form")

const capitalize = (str) => str.charAt(0).toUpperCase() + str.slice(1);

function pintarDatos(arrayPersonajes) {
  $sectionContainCards.innerHTML = "";
  for (const { id, image, name, species, house, gender, alive, dateOfBirth } of arrayPersonajes) {
    $sectionContainCards.innerHTML += `<div class="flex flex-col justify-center items-center border border-2 border-black rounded-xl w-5/6 md:w-5/12 lg:w-3/12 mx-8 my-2 h-72">
      <img src="${image}" class="h-24 w-24">
      <p>Nombre: ${capitalize(name)}</p>
      <div class="flex flex-row justify-around w-full flex-wrap">
        <p class="w-2/5">Especie: ${capitalize(species)}</p>
        <p class="w-2/5">Casa: ${capitalize(house)}</p>
        <p class="w-2/5">Genero: ${capitalize(gender)}</p>
        <p class="w-2/5">Nacimiento: ${dateOfBirth ? dateOfBirth : "Desconocido"}</p>
        <p class="w-2/5">Vivo: ${alive ? "Si, esta vivito" : "No, se despidio"}</p>
        <div class="w-full flex justify-around my-4">
          <button id="${id}" class="button-edit bg-green-400 p-2 px-4 rounded border border-black">Editar</button>
          <button id="${id}" class="button-delete bg-red-400 p-2 px-4 rounded border border-black">Eliminar</button>
        </div>
      </div>
    </div>`;   
  }

  const arrayButtonsDelete = $$(".button-delete") // ["<button>", <button>]
  const arrayButtonsEdit = $$(".button-edit")

  arrayButtonsDelete.forEach((button) => {
    button.addEventListener("click", (e) => {
      quitarPersonaje(e.target.id)
    })
  })

  arrayButtonsEdit.forEach(button => {
    button.addEventListener("click", (e) => {

      // 1- Busco el personaje, para plasmar los datos de ese personaje en el formulario de edicion
      const personaje = todosLosDatos.find(persona => persona.id == e.target.id)

      // 2- Activo la vista de edicion
      $editForm.style.display = "flex";
      
      // 3- Coloco los valores del personaje en cada input
      $("#image-edit").value = personaje.image;
      $("#name-edit").value = personaje.name;
      // Plasmar los demas

      // 4- Coloco el id
      $editForm.id = personaje.id
    })
  })
}

function quitarPersonaje(id) {
  todosLosDatos = todosLosDatos.filter((personaje) => personaje.id !== id)

  localStorage.setItem("personajes", JSON.stringify(todosLosDatos));

  pintarDatos(todosLosDatos)
}

$selectMenuGender.addEventListener("input", () => {
  if ($selectMenuGender.value !== "all") {
    const personajesFiltrados = todosLosDatos.filter((personaje) => personaje.gender === $selectMenuGender.value);
    pintarDatos(personajesFiltrados);
  } else {
    pintarDatos(todosLosDatos);
  }
});

$form.addEventListener("submit", (event) => {
  event.preventDefault();

  // Agregar lo que esta en todos los inputs, a un array. Y luego actualizar el LS
  todosLosDatos.push({
    id: crypto.randomUUID(),    //    '9c34ace3-83d0-482e-ac1b-915cf29cbad1' 
    image: event.target[0].value,
    name: event.target[1].value,
    species: event.target[2].value,
    gender: event.target[3].value,
    house: event.target[4].value,
    dateOfBirth: dayjs(event.target[5].value).format("DD-MM-YYYY"),
  });

  localStorage.setItem("personajes", JSON.stringify(todosLosDatos));

  pintarDatos(todosLosDatos);
});

$editForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const personaje = todosLosDatos.find(elem => elem.id === event.target.id)

  // Agregar lo que esta en todos los inputs, a un array. Y luego actualizar el LS
  const nuevosDatos = {  //    '9c34ace3-83d0-482e-ac1b-915cf29cbad1' 
    image: event.target[0].value,
    name: event.target[1].value,
    species: event.target[2].value,
    gender: event.target[3].value,
    house: event.target[4].value,
    dateOfBirth: dayjs(event.target[5].value).format("DD-MM-YYYY"),
  };

  const indiceBuscado = todosLosDatos.findIndex((personaje) => personaje.id == event.target.id)
  todosLosDatos.splice(indiceBuscado, 1, {...nuevosDatos, id: personaje.id});

  localStorage.setItem("personajes", JSON.stringify(todosLosDatos));

  pintarDatos(todosLosDatos);

  $editForm.style.display = "none"
});

$buttonViewHome.addEventListener("click", () => {
  $form.style.display = "none";
  $sectionList.style.display = "block";
});

$buttonViewCreate.addEventListener("click", () => {
  $form.style.display = "flex";
  $sectionList.style.display = "none";
});

$buttonModal.addEventListener("click", () => {
  $containModalX.style.display = "flex";
});

// En LS guardaremos solo los creados por el usuario
window.onload = () => {
  obtenerDatosLocalStorage()
  pintarDatos(todosLosDatos);
};

function obtenerDatosLocalStorage() {
  const datosLocalStorage = JSON.parse(localStorage.getItem("personajes"));
  if(datosLocalStorage === null) {
    localStorage.setItem("personajes", JSON.stringify(datosJS));
    todosLosDatos = datosJS
  } else {
    todosLosDatos = datosLocalStorage
  }
  return todosLosDatos
}
