function $(selector) {
  return document.querySelector(selector)
}

const $h1Title = $("#title")
const $buttonMoney = $("#btnMoney")

/* DONDE APLICARLO?.agregaEscuchadorDeEventos("Tipo de escuchador", Reaccion ante el evento) */
$buttonMoney.addEventListener("click", function (event) {
  console.log("CLICK BOTTON")
  event.stopPropagation()
})

// let contadorTerapiaPicante = 0
// $h1Title.addEventListener("copy", function () {
//   contadorTerapiaPicante += 1;
//   console.log(contadorTerapiaPicante)
// })

window.addEventListener("click", function(event) {
  console.log("CLICK WINDOW")
})