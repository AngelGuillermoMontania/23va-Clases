// function saludar(cb) {
//   return cb()
// }

// array.filter(() => {})

// CallBack  ===> Funcion que se pasa por parametro
// CallBack es simplemente la definicion de cuando una funcion se esta pasando como parametro
// de otra funcion

/* ------------------ ARRAYS ----------------- */
/* 

const pepeHonguito = [5, true, "Hola", []];
//                    0   1       2     3

pepeHonguito[2]  //  "Hola"; 

*/
/* 
const pepeHonguito = [5, true, "Hola", [7, 5, 9, 746]];

pepeHonguito[3][2]; //  9 ;

console.log("Hola"[2].toUpperCase().repeat(5));  // "LLLLL"
 */

/* ------------------ ARRAYS METODOS -------------------- */

/* ************************     MAP     ********************************  */
// const arr = [5, 475, 9, 75, 86, 91, 32, 200, 124];

/* El map, devuelve un nuevo array con todos los elementos modificados o no segun 
lo indicado en la ejecucion de la funcion */
// const multiplicado = arr.map((elem) => {
//   return elem * 2;
// });

// const multiplicarMayoresA100 = arr.map((elem) => {
//   if (elem >= 100) {
//     return elem * 2;
//   } else {
//     return elem
//   }
// }); // [5, 950, 9, 75, 86, 91, 32, 400, 248]

// console.log(multiplicarMayoresA100);

/* ************************     FILTER     ********************************  */

// const arr = [5, 475, 9, 75, 86, 91, 32, 200, 124];

// /* El filter, devuelve un nuevo array con los elementos que cumplan con la condicion que 
// se establece en la funcion. La funcion callback espera true o false */
// const menoresA100 = arr.filter(loquita => loquita <= 100); //   [5,9,75,86,91,31]

// const menoresA50yMayoresA150YPares = arr.filter((pepe) => {  // [86, 32, 200]
//   if (pepe <= 100 && pepe % 2 === 0) {
//     return true;
//   } else if (pepe >= 150 && pepe % 2 === 0) {
//     return true;
//   } else {
//     return false;
//   }
// });


/* ************************     FIND     ********************************  */

// const arr = [5, 475, 9, 75, 86, 91, 32, 200, 124];

// // arr[1]  =====>   475

// /* El find, devuelve el primer elemento que coincida con la condicion establecida en la funcion */
// const encontrado = arr.find(cosito => cosito > 50)  //  475

// const entre180y220 = arr.find(elem => {
//   if(elem >= 180) {
//     if(elem <= 220) {
//       return true
//     }
//   }
//   return false
// })



/* ************************     SOME     ********************************  */

// const arr = [5, 475, 9, 75, 86, 91, 32, 200, 124];

// /* El some, devuelve true o false si uno de los elementos cumple la condicion establecida en la funcion */
// const encontrado = arr.some(cosito => cosito > 50)  // true

/* Every, fill, (splice, split, slice), reduce, sort */


/* ************************     Every     ********************************  */

// const arr = [5, 475, 9, 75, 86, 91, 32, 200, 124];

// /* El every, devuelve true o false si todos los elementos cumplen la condicion establecida en la funcion  */
// const todosMayoresA100 = arr.every(numero => numero > 100)  // false


/* ************************     fill     ********************************  */

// const arr = [5, 475, 9, 75, 86, 91, 32, 200, 124];

// /* El fill, devuelve el array original modificado con el valor pasado como primer parametro, desde la posicion 
// del segundo parametro (opcional), hasta la posicion pasada como tercer parametro (opcional) */
// const todos150 = arr.fill(150)
// console.log(arr) // [150, 150, 150, 150, 150, 150, 150, 150, 150]

/* ************************     splice   ********************************  */

// const arr = [5, 475, 9, 75, 86, 91, 32, 200, 124];
//           0   1   2   3   4   5  6    7    8
/* Splice, modifica el array original eliminando desde el indice indicado o cambiando elementos 
El primer parametro indica, desde de que indice trabajar
El segundo parametro indica, hasta donde trabajar (Opcional)
El tercer parametro indica, el valor a ingresar (Opcional)
.splice(indiceDesde, cantidad, ingreso)*/



/* console.log("Original",arr)
arr.splice(7)
console.log("Primer splice", arr)

arr.splice(2,3)
console.log("Segundo Splice", arr)

arr.splice(1, 0, 99999999)
console.log("Tercer splice", arr) */


/* ************************     Slice   ********************************  */

// const arr = [5, 475, 9, 75, 86, 91, 32, 200, 124];
/* Slice, devuelve un nuevo array con los elementos indicados en la posicion del array (inicio, fin) */
/* Primer parametro, opcional indica el indice de inicio */
/* Segundo parametro, opcional indica el incide de fin */

// const copyArr = arr.slice()
// console.log("slice 1", copyArr)

// const desde86 = arr.slice(4)
// console.log("slice 2", desde86)

// const desde86Hasta200 = arr.slice(4, 8)
// console.log("slice 3", desde86Hasta200)





/*  *****************************  Bucles ****************************  */

// const numeros = [5, 475, 9, 75, 86, 91, 32, 200, ["hola", "chau", "Sandra", "Claudia"]];
//               0   1   2   3   4   5  6    7                    8

// for (const elem of numeros) {
//   console.log(elem)
// }

// numeros.forEach(elem => {
//   console.log(elem)
// })

// for (let pepe = 0; pepe < numeros.length; pepe++) {
//   if(typeof numeros[pepe] === "number") {
//     console.log(numeros[pepe])
//   } else {
//     for (let j = 0; j < numeros[pepe].length; j++) {
//       console.log(numeros[pepe][j])
//     }
//   }
// }

/* Ejercicio que inclya bucles y metodos */

// const nombres = ["Noelia", "Nadia", "Deborah", "Sara", "Melany", "Angel"]

// nombres.forEach((nombre, index) => {
//   console.log(nombre, index)
//   if(nombre.length > 5) {
//     console.log(nombre)
//   } else {
//     let copiaNombre = "" // NadiaX
//     for (let i = 0; i < 6; i++) {
//       if(nombre[i]) {
//         copiaNombre += nombre[i]
//       } else {
//         copiaNombre += "X"
//       }
//     }  
//     nombres.splice(index, 1, copiaNombre)
//   }
// })

// console.log(nombres) // ["Noelia", "NadiaX", "Deborah", "SaraXX", "Melany", "AngelX"]

// SOLUCION 1: FOR COMUN   
// SOLUCION 2: Agregar el segundo parametro al forof o forEach    nombres.forEach((nombre, index) => {})
// SOLUCION 3: nombres.findIndex(elem => elem == nombre)

// ["Noelia", "NadiaX", "Deborah", "SaraXX", "Melany", "AngelX"]


/* -----------   SORT ---------------- */

const arr = [5, 475, 9, 75, 86, 91, 32, 200, 124];

/* El sort, ordena el array segun lo indicado en la funcion callback, toma 2 argumentos, 
el valor actual y el siguiente.
El sort espera saber si retorno -1 lo coloca a la izquierda, si retorno 1 lo coloca a la derecha, si es 0 lo mantiene
en la misma ubicacion */
const ordenado = arr.sort((a, b) => {
  if(a - b < 0) {
    return -1
  } else if (a - b > 0) {
    return 1
  } else {
    return 0
  }
}) 
// [5]   a = 5   y b = 475
// []     a = 475 y b = 9
console.log(ordenado)