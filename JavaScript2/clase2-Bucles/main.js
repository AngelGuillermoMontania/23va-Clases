/* ---------------------  EJERCICIOS DE ARRAY  -------------------------- */

// function contiene(numero, numeros) {
//   return numeros.includes(numero);
// }

// const saludo = "Hola";
// const saludoLargo = "Hola Como va?";

// function invertir(string) {
//   const arrayDelString = string.split("");
//   // ["H", "o", "l", "a"]

//   const aux = arrayDelString.map((elem) => {
//     if (elem.toLowerCase() === elem) {
//       return elem.toUpperCase();
//     } else {
//       return elem.toLowerCase();
//     }
//   });
//   // ["h", "O", "L", "A"]

//   return aux.join("");
// }

// invertir(saludo);
// invertir(saludoLargo);

/* -----------------------  EJERCICIOS DE ARRAY  -------------------------- */

/* for(valor inicial, condicion de parada, modificador de valor) */

// for (let i = 0; i <= 4; i++) {
//   console.log(i);
// }

// FOR
// 1- el valor inicial es 0
// 2- La condicion se cumple? SI
// 3- Ejecuta el codigo entre las llaves (Hace una iteracion)
// 4- Despues de ejecutar el codigo entre llaves, modifica el valor.   (i = 1)
// 5- La condicion se cumple? SI
// 6- Ejecuta el codigo entre las llaves (Hace una iteracion)
// 7- Despues de ejecutar el codigo entre llaves, modifica el valor.   (i = 2)

// console.log(0)
// console.log(1)
// console.log(2)
// console.log(3)

// const personas = ["Nadia", "Noelia", "Gise", "Marianela", "Sara"];

// 5
// for (let i = 0; i < personas.length; i++) {
//   console.log(personas[i]);
// }

// for (let i = personas.length - 1; i >= 0; i--) {
//   console.log(personas[i]);
// }

// function invertir(string) {
//   let aux = "";
//   for (let i = 0; i < string.length; i++) {
//     if (string[i].toLowerCase() === string[i]) {
//       aux += string[i].toUpperCase();
//     } else {
//       aux += string[i].toLowerCase();
//     }
//   }
// }

// invertir("Hola");

//
// "a"

// const personas = ["Nadia", "Noelia", "Gise", "Marianela", "Sara"];

// for (const persona of personas) {
//   console.log(persona);
// }

// function invertir(string) {
//   let aux = "";
//   for (const letra of string) {
//     if (letra.toLowerCase() === letra) {
//       aux += letra.toUpperCase();
//     } else {
//       aux += letra.toLowerCase();
//     }
//   }
// }

// invertir("Hola");

// let contador = 0;
// while (contador <= 4) {
//   console.log(contador);

//   contador++;
// }

const $body = document.querySelector("#body");
const personas = ["Nadia", "Noelia", "Gise", "Marianela", "Sara"];

for (const persona of personas) {
  $body.innerHTML += `<h1>${persona}</h1>`;
}

const $li = document.querySelectorAll(".saludo"); // [<li>Hola</li>, <li>Chau</li>]

for (const li of $li) {
  li.innerText = "jaja";
}

function $(element) {
  return document.querySelector(element);
}

function $$(element) {
  return document.querySelectorAll(element);
}
