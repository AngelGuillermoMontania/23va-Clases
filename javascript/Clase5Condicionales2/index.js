/* Guardo en una const la lampara, if(lampara === enchufada) en el caso que else, lampara = enchufar,
la condicion de que lampara === enchufada, if(ampolleta === quemada)   */



/* 

15) calcularPorcentaje(numero, porcentaje)
Crear una función calcularPorcentaje que tome como argumentos un número y un porcentaje y 
devuelva el valor del porcentaje correspondiente al número

calcularPorcentaje(100, 15) // 15
calcularPorcentaje(10, 50) // 5
calcularPorcentaje(200, 10) // 20



16) sumarPorcentaje(numero, porcentaje)
Crear una función sumarPorcentaje que tome como argumentos un número y un porcentaje y 
devuelva la suma de dicho número con la de su porcentaje. Usar la función calcularPorcentaje para obtener
 el porcentaje a sumar

sumarPorcentaje(100, 15) // 115
sumarPorcentaje(10, 50) // 15
sumarPorcentaje(200, 10) // 220 
*/


// 15)
// function calcularPorcentaje( numero, porcentaje ) {
//     return (numero * porcentaje) / 100;
// }

// // 16)
// function sumarPorcentaje(numero, porcentaje) {   // 100
//   // retorna la suma de numero con porcentaje, le sume a numero el resultado de calcularPorcentaje(numero, porcentaje)
//   // calcularPorcentaje(10, 50) // 5
//   // sumarPorcentaje(10, 50) // 15

//   // Si me pasan en sumarPorcentaje(200, 10)
//   // calcularPorcentaje(200, 10) // 20
//   // resultado esperado 220 

//   return calcularPorcentaje(numero, porcentaje) + numero
// }

// console.log(sumarPorcentaje(100, 15)) // 115
// console.log(sumarPorcentaje(10, 50)) // 15
// console.log(sumarPorcentaje(200, 10)) // 220 


// jugarPiedraPapelTijera(a, b)
// Crear una función jugarPiedraPapelTijera que tome como argumentos dos strings a y b que representen una jugada (piedra, papel, tijera) y dependiendo el devuelva un string con un mensaje avisando qué jugada ganó (o si hubo empate)

// jugarPiedraPapelTijera('tijera', 'piedra')  // ¡Ganó piedra!
// jugarPiedraPapelTijera('piedra', 'tijera')  // ¡Ganó piedra!
// jugarPiedraPapelTijera('papel', 'piedra')   // ¡Ganó papel!
// jugarPiedraPapelTijera('piedra', 'papel')   // ¡Ganó papel!
// jugarPiedraPapelTijera('papel', 'tijera')   // ¡Ganó tijera!
// jugarPiedraPapelTijera('tijera', 'papel')   // ¡Ganó tijera!
// jugarPiedraPapelTijera('piedra', 'piedra')  // ¡Empate!
// jugarPiedraPapelTijera('papel', 'papel')    // ¡Empate!
// jugarPiedraPapelTijera('tijera', 'tijera')  // ¡Empate!

// function jugarPiedraPapelTijera(a, b) {

//   let aux = ""
//   if((a === "tijera" && b === "piedra") ||(a === "piedra" && b === "tijera")) {
//   // if((a === "tijera" || b === "tijera") && (a === "piedra" || b === "piedra") ) {
//     aux = "¡Ganó piedra!"
//   } else if((a === "papel" && b === "piedra") ||(a === "piedra" && b === "papel")) {
//     aux = "¡Ganó papel!"
//   } else if((a === "papel" && b === "tijera") ||(a === "tijera" && b === "papel")) {
//     aux = "¡Ganó tijera!"
//   } else if(a === b) {
//     aux = "¡Empate!"
//   } else {
//     aux = "No es una jugada valida"
//   }
//   return aux
// }










/* 
burlarse(str)
Crear una función burlarse que tome como argumento un string str y devuelva el mismo string con todas las vocales reemplazadas por la letra i

burlarse('programar es dificil') // 'prigimir is dificil' */

// function burlarse(str) {

//   const strSinA = str.replaceAll("a", "i")
//   const strSinE = strSinA.replaceAll("e", "i")
//   const strSinO = strSinE.replaceAll("o", "i")
//   const strSinU = strSinO.replaceAll("u", "i")

//   return strSinU
// }

// console.log(burlarse('Perro'))


/* -----------   SWITCH ---------- */

// const fruta = "Naranja"

// switch (fruta) {
//   case "Banana":
//     console.log("Puedes hacer un licuado y nada mas");
//     break;
//   case "Manzana":
//     console.log("Puede rayarla");
//   case "Naranja":
//     console.log("Puedes hacer un jugo");
//     break;
//   default: 
//     console.log("No es una fruta valida");
// }

// if(fruta === "Banana") {
//   console.log("Puedes hacer un licuado");
// } else if(fruta === "Manzana") {
//   console.log("Puede rayarla");
//   console.log("Puede hacer un jugo")
// } else if (fruta === "Naranja") {
//   console.log("Puedes hacer un jugo");
// } else {
//   console.log("No es una fruta valida");
// }



//    +50 condiciones se usa un switch
//    -50 condiciones se usa el if else if else


/* 

let cantidadDisponible = cantidadDisponible - Number(cantidadARetirar)

// NUEVAS VERSIONES
cantidadDisponible -= Number(cantidadARetirar)

let cantidad = 5

cantidad += 2    // cantidad = cantidad + 2

*/


let cantidadDisponible = 50000

function retirarDinero(num) {
  // cantidadDisponible = cantidadDisponible - Number(cantidadARetirar)
  cantidadDisponible -= Number(num)
  alert(`Su cantidad disponible despues de el retiro es $${cantidadDisponible}`)
}

let cantidadARetirar = prompt(`Cuanto desea retirar?`)
retirarDinero(Number(cantidadARetirar))

let otraOperacion = confirm(`Desea sacar mas dinero`)

if(otraOperacion) {
  cantidadARetirar = prompt(`Su cantidad disponible es ${cantidadDisponible}. Cuanto desea retirar?`)
  retirarDinero(Number(cantidadARetirar))
} else {
  alert("Muchas gracias por trabajar en GuillBanking")
}
