// Todo
// Crear una página que:
// Tenga un input, un botón que diga Crear todo y una lista.
// Al presionar el botón, si el input no está vacío, 
// se agregue un ítem a la lista con el contenido del input y se borre el contenido del input.

function $(element) {
  return document.querySelector(element)
}

const $inputTxt = $("#txt")
const $buttonCreate = $("#create")
const $liList = $("#list")

function reestablecerValores() {
  $inputTxt.value = ""
}

$buttonCreate.addEventListener("click", () => {
  if($inputTxt.value !== "") {
    $liList.innerHTML += `<li>${$inputTxt.value}</li>`
  }
  
  reestablecerValores()
})