/* EJEMPLO 1 */
// function $(element) {
//   return document.querySelector(element)
// }

// const $h1FullName = $("#fullName")
// const $inputName = $("#name")
// const $inputLastName = $("#lastName")

// $inputName.addEventListener("input", () => {
//   $h1FullName.innerText = `${$inputName.value} ${$inputLastName.value}`
// })

// $inputLastName.addEventListener("input", () => {
//   $h1FullName.innerText = `${$inputName.value} ${$inputLastName.value}`
// })

/* CUANDO ACCEDO AL VALOR MEDIANTE EL EVENT ES ======>          event.target.value */
/* CUANDO ACCEDO AL VALOR MEDIANTE EL ELEMENTO GUARDADO ======>   $elemento.value */







/* EJEMPLO 2 */
// document.querySelector("#name").addEventListener("input", () => {
//   document.querySelector("#fullName").innerText = `${document.querySelector("#name").value} ${document.querySelector("#lastName").value}`
// })

// document.querySelector("#lastName").addEventListener("input", () => {
//   document.querySelector("#fullName").innerText = `${document.querySelector("#name").value} ${document.querySelector("#lastName").value}`
// })









/* EJEMPLO3 */
// function $(element) {
//   return document.querySelector(element)
// }

// const $h1FullName = $("#fullName")
// const $inputName = $("#name")
// const $inputLastName = $("#lastName")

// function escribirNombre() {
//   $h1FullName.innerText = `${$inputName.value} ${$inputLastName.value}`
// }

// $inputName.addEventListener("input", () => {
//   escribirNombre()
// })

// $inputLastName.addEventListener("input", () => {
//   escribirNombre()
// })






/* EJEMPLO 4 */
// function $(element) {
//   return document.querySelector(element)
// }

// const $h1FullName = $("#fullName")
// const $inputName = $("#name")
// const $inputLastName = $("#lastName")

// function iniciarValores() {

// }

// function escribirNombre() {
//   $h1FullName.innerText = `${$inputName.value} ${$inputLastName.value}`
// }

// $inputName.addEventListener("input", escribirNombre)

// $inputLastName.addEventListener("input", escribirNombre)











/* EJEMPLO 5 */
function $(element) {
  return document.querySelector(element)
}


const $rangeBrightness = $("#rangeBrightness")
const $divContainer = $("#divContainer")

function iniciarValores() {
  $rangeBrightness.value = "0.8"
}

$rangeBrightness.addEventListener("input", () => {
  $divContainer.style.filter = `brightness(${$rangeBrightness.value})`
})

iniciarValores()