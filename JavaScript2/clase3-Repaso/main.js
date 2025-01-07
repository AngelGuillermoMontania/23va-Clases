/* 
RANKING 1

push()
.length

RANKING 2

.filter()
.some()
.find()
.map()
.includes()

RANKING 3

.pop()
.shift()
.unshift()
.findIndex()
.forEach()
.join()
.reduce()
.slice()

RANKING 4
.splice()
.every()

RANKING 5
.concat()
.fill()
.keys()
.lastIndexOf()

*/

// const words = ["spray", "elite", "exuberant", "destruction", "present"];

// const result = words.filter((pepe) => pepe.length > 6);

// console.log(result); // ["exuberant", "destruction", "present"]

// const result = words.filter((pepe) => pepe.length > 6);

// const arrayNumeros = [5, 7, 99, 34, 54, 2, 12];
// const arrayNumeros2 = [5, 1, 7, 99, 34, 54, 2, 12];

// function obtenerMenor(numeros) {
//   // const menor = math.min(...números)

//   numeros.reduce((prev, curr) => (curr < prev ? curr : prev));
// }

// obtenerMenor(arrayNumeros);

// Crear una función germinar que tome como argumento un string de plantines con flores y plantines (🌱).
// El array debe comenzar con una flor. La función debe devolver un string con los plantines convertidos en flores.
// El plantín se debe convertir en la primera flor que encuentre a su izquierda. Ejemplo:

// 🌷 = 83c
// 🌱 = f37

// germinar(plantines)
// germinar('🌷🌱🌻🌱🌸🌱🌷🌱🌻🌱🌸🌱') // 'TPGPAPTPGPAP'    //   ["T", "T", "G", "G"]
// germinar('🌷🌱🌱🌱🌻🌱🌱🌸🌱🌱🌱🌱') // '🌷🌷🌷🌷🌻🌻🌻🌸🌸🌸🌸🌸'
// germinar('🌻🌸🌱🌷🌻🌱🌱🌷🌷🌱🌱🌱') // '🌻🌸🌸🌷🌻🌻🌻🌷🌷🌷🌷🌷'

// function germinar(string) {
//   let flor = string[0]; // T
//   let arrayString = string.split("");

//   const existePlantin = arrayString.some((value) => value === "P");

//   if (existePlantin) {
//     const arrayModificado = arrayString.map((element) => {
//       if (element === "P") {
//         return flor;
//       } else {
//         flor = element;
//         return flor;
//       }
//     });

//     const nuevoStringModificado = arrayModificado.join("");

//     return nuevoStringModificado;
//   } else {
//     return string;
//   }
// }

// console.log(germinar("TPGPAPTPGPAP"));

// separar(perrosYGatos)
// Crear una función separar que tome como argumento un string con emojis de perros y gatos y
// devuelva un string con los perros agrupados por un lado y los gatos por otro. Ejemplo:

// separar('PGPGGPP') // 'PPPPGGG'

function separar(stringDePerrosYGatos) {
  const arrayDePerrosYGatos = stringDePerrosYGatos.split("");

  const arrayPerros = arrayDePerrosYGatos.filter((mascota) => mascota === "P"); // ["P", "P", "P", "P"]
  const arrayGatos = arrayDePerrosYGatos.filter((mascota) => mascota === "G"); // ["G", "G", "G"]

  const arrayAgrupadoDePerrosYGatos = arrayPerros.concat(arrayGatos); // ["P", "P", "P", "P", "G", "G", "G"]
  const stringOrdenadoDePerrosYGatos = arrayAgrupadoDePerrosYGatos.join(""); // "PPPPGGG"
  return stringOrdenadoDePerrosYGatos;
}

console.log(separar("PGPGGPP"));
