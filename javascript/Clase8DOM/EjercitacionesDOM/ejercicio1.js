/* Hacer un programa que al iniciarse pida mediante 
// un prompt ingresar un nombre, y una vez ingresado muestre un saludo con el nombre 
// dentro de un h1. El h1 debe estar centrado y tener un tamaño de letra y 
// una tipografía distinta de la que viene por defecto. */

/* tengo que hacer un prompt que permita ingresar un nombre  */
/* DESPUES */
/* Muestre un saludo con el nombre ingresado en un H1 */
/* H1 centrado, con un tamaño de letra y una tipografia */

/* prompt("Ingrese su nombre") */
/* SEPARADO POR UN ENTER */
/* h1.text = Lo escrito en el prompt */
/* h1.estilos = centrado, tamaño de letra y una tipografia */

/* const nombre = prompt("Ingrese su nombre") */
/*  */
/* h1.innerText = Saludo + nombre */
/* h1.style = centrado */
/* h1.style = tamaño de letra */
/* h1.style = tipografia */

/* const nombre = prompt("Ingrese su nombre") */
/*  */
/* h1.innerText = Saludo + nombre */
/* h1.style = centrado */
/* h1.style = tamaño de letra */
/* h1.style = tipografia */

/* const nombre = prompt("Ingrese su nombre")
const h1 = document.querySelector("#saludo")

h1.innerText = Saludo + nombre
h1.style = centrado
h1.style = tamaño de letra
h1.style = tipografia */

const nombre = prompt("Ingrese su nombre")
const h1 = document.querySelector("#saludo")

h1.innerText = `Hola ${nombre} Como va?`
h1.style.textAlign = "center"
h1.style.fontSize = "16px"
h1.style.fontFamily = "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif"