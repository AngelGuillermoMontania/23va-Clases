/* CallBacks */

// function nombres() {
//   return "Angel Guillermo"
// }

// function saludar(escribirNombre) {
//   return "Hola! " + escribirNombre() + " Como va?"
// }

// saludar(nombres);

// function filter(cb) {
//   let nuevoArray = [];
//   if (cb(item)) {
//     nuevoArray.push(item);
//   }
// }

// const numeros = [16, 4, 1, 15, 2];

// numeros.filter((element) => element > 6);

// function sumar(a) {
//   return cb(a * 2);
// }

// function calcularResto(numero, cb) {
//   return 5 + cb(numero); // 5 + 30
// }

// calcularResto(15); // 35

// setTimeOut(cb, tiempo)
// setTimeout(() => {
//   console.log("Pasaron 5 segundos");
// }, 5000);

// console.log("HOLAAAA!!!!");

// let tiempo = 0;
// // setInterval(cb, tiempo)
// setInterval(() => {
//   tiempo + 1;
//   $h1.innerText(tiempo);
// }, 1000);

// # map

// * Crear una función `map` que acepte un array y un callback y que:
//     - por cada elemento del array ejecute el callback pasándole dicho elemento como argumento
//     - obtenga el resultado
//     - lo pushee a un nuevo array
//     - devuelva el array final con el resultado de cada una de las llamadas al callback.

// Ejemplo:

// ```javascript
// const numeros = [1, 2, 3]
// const duplicar = x => x * 2
// map(numeros, duplicar) // [2, 4, 6]

// const numero = 5
// numero = 8

// function map(arr, cb) {
//   const nuevoArray = [];

//   arr.forEach((elem) => {
//     //                1   2   3
//     const elementoModificado = cb(elem); //   1   2   3
//     nuevoArray.push(elementoModificado); // 2   4   6
//   });

//   return nuevoArray;
// }

// const nuevoArray = map([1, 2, 3], (pepeHonguito) => pepeHonguito * 2);
// console.log(nuevoArray);

// invertir([5, 7, 99, 34, 54, 2, 12])     ===>   12,2,54,34,99,7,5

// function invertir(array) {
//   //  ------------ FOR --------------
//   // const arrayDadoVuelta = [];

//   // for (let i = array.length - 1; i >= 0; i--) {
//   //   arrayDadoVuelta.push(array[i]);
//   // }

//   // return arrayDadoVuelta;

//   // ------------- FOR OF ------------
//   // const arrayDadoVuelta = [];   //  12, 2, 54, 34, 99,  7, 5

//   // for (const numero of array) {
//   //   arrayDadoVuelta.unshift(numero);
//   // }

//   // return arrayDadoVuelta;

//   // -------------- FOR EACH ------------
//   const arrayDadoVuelta = []; //  12, 2, 54, 34, 99,  7, 5

//   array.forEach((numero) => {
//     arrayDadoVuelta.unshift(numero);
//   });

//   return arrayDadoVuelta;
// }

// const arrayModificado = invertir([5, 7, 99, 34, 54, 2, 12]);
// console.log(arrayModificado);

// capitalizarPalabras(string)
// Crear una función capitalizarPalabras tome como argumento un string string y devuelva un string donde cada palabra está capitalizada (con la primera letra ma´yuscula). Dejar las demás letras como están.

// capitalizarPalabras('Esto es un título') // 'Esto Es Un Título'
// capitalizarPalabras('había una vez') // 'Había Una Vez'
// makeTitle('OMG') // 'OMG'

function capitalizarPalabras(string) {
  /* ---------------- FOR COMUN ------------------ */
  // const arrayPalabra = string.split(""); // ["E", "s", "t", "o", " ", "e", "s"]
  // const arrayPalabraConMayuscula = []; // ["E", "s", "t", "o", " ", "E", ]
  // // aux e
  // arrayPalabraConMayuscula.push(arrayPalabra[0].toUpperCase());

  // let aux = "";
  // for (let i = 1; i < arrayPalabra.length; i++) {
  //   if (aux === arrayPalabra[i]) {
  //     arrayPalabraConMayuscula.push(arrayPalabra[i].toUpperCase());
  //     aux = "";
  //   } else if (arrayPalabra[i] === " ") {
  //     arrayPalabraConMayuscula.push(arrayPalabra[i]);
  //     aux = arrayPalabra[i + 1];
  //   } else {
  //     arrayPalabraConMayuscula.push(arrayPalabra[i]);
  //   }
  // }

  // return arrayPalabraConMayuscula.join("");

  /* ---------------- FOR OF ------------------ */
  const arrayPalabra = string.split(""); // ["E", "s", "t", "o", " ", "e", "s"]
  const arrayPalabraConMayuscula = []; // ["E", "s", "t", "o", " ", "E", ]

  arrayPalabraConMayuscula.push(arrayPalabra[0].toUpperCase()); // Aca agrego la primer letra

  let aux = ""; // Esta es la variable que uso para controlar el siguiente al espacio vacio

  for (const { letra, i } of arrayPalabra) {
    // el argumento i en este forof representa el indice
    if (aux === letra) {
      arrayPalabraConMayuscula.push(letra.toUpperCase());
      aux = "";
    } else if (letra === " ") {
      arrayPalabraConMayuscula.push(letra);
      aux = arrayPalabra[i + 1];
    } else {
      arrayPalabraConMayuscula.push(letra);
    }
  }

  return arrayPalabraConMayuscula.join("");
}

console.log(capitalizarPalabras("Esto es un título"));

// continue; Salta a la siguiente iteracion
// break; Cortar la ejecucion del for

// sumarSeccion(array, comienzo, cantidad)
// Crear una función sumarSeccion que tome como argumento un array de números enteros array, un número entero comienzo y un número entero cantidad, y que devuelva la suma de cantidad de números de array empezando a contar desde el ítem con índice comienzo.

// sumarSeccion([2, 2, 4, 3, 10, 20, 5], 0, 3) // 8 (2 + 2 + 4 = 8)
// sumarSeccion([2, 2, 4, 3, 10, 20, 5], 2, 4) // 37 (4 + 8 + 10 + 20 = 37)
// sumarSeccion([2, 2, 4, 3, 10, 20, 5], 4, 1) // 3
