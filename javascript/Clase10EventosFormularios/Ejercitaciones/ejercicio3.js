/* RGB
Crear una página que:

Tenga tres inputs numéricos, con valor mínimo 0 y valor máximo 255, uno para el valor R (red), otro para el valor G (green) y otro para el valor B (blue).
Todos los inputs comiencen con el valor 255.
Cuando se modifica algún input, se cambie el color de fondo del body con el color que se forma a partir de dichos valores. */

function $(cosa) {
  return document.querySelector(cosa)
}

const $inputRed = $("#red")
const $inputGreen = $("#green")
const $inputBlue = $("#blue")
const $buttonReset = $("#reset")
const $body = $("body")

function reestablecerValores() {
  $inputRed.value = "100"
  $inputGreen.value = "100"
  $inputBlue.value = "100"

  $body.style.backgroundColor = `rgb(${$inputRed.value}, ${$inputGreen.value}, ${$inputBlue.value})`
}

reestablecerValores()

$buttonReset.addEventListener("click", reestablecerValores)

$inputRed.addEventListener("input", () => {
  $body.style.backgroundColor = `rgb(${$inputRed.value}, ${$inputGreen.value}, ${$inputBlue.value})`
})

$inputGreen.addEventListener("input", () => {
  $body.style.backgroundColor = `rgb(${$inputRed.value}, ${$inputGreen.value}, ${$inputBlue.value})`
})

$inputBlue.addEventListener("input", () => {
  $body.style.backgroundColor = `rgb(${$inputRed.value}, ${$inputGreen.value}, ${$inputBlue.value})`
})