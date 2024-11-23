/* Crear una barra de progreso con dos divs anidados. Hacer un programa que
 al iniciarse pregunte mediante un prompt por un porcentaje de progreso y 
 modifique el ancho de la barra de progreso respectivamente 
 (si se ingresa 75 la barra de progreso tiene que ocupar el 75% de la 
 barra contenedora) */

/* La barra de progreso estaria representada con esto <div><div></div></div> */
/* const porcentaje = prompt */
/* la variable porcentaje modificar la barra de progreso */

const porcentaje = prompt("Escriba un porcentaje")
const $divContenedorProgreso = document.querySelector("#contenedor-progreso")
const $divProgreso = document.querySelector("#progreso")

$divContenedorProgreso.style.height = "100px"
$divContenedorProgreso.style.border = "1px solid red"

$divProgreso.style.margin = "15px 0px"
$divProgreso.style.height = "100%"
$divProgreso.style.border = "1px solid black"
$divProgreso.style.borderRadius = "10px"
$divProgreso.style.backgroundColor = "red"

$divProgreso.style.width = `${porcentaje}%` 