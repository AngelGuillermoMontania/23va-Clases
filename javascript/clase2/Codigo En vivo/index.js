/* --------------- EJEMPLO 1 ---------------- */
// const saludo = "Hola!";
// const nombre = "Nadia";

// // Declarar la funcion
// function saludar() {
//   console.log(`${saludo} ${nombre}`);
// }

// // Ejecutar la funcion
// saludar();

/*  ------------ EJEMPLO 2 ----------------- */

// const saludo = "Hola!";
// const nombre = "Nadia";

// // Declarar la funcion
// function saludar() {
//   console.log("LO QUE SEA");
//   return `${saludo} ${nombre}`;
// }

// // Ejecutar la funcion
// const saludoPersona = saludar();
// console.log(saludoPersona);

/* ------------- EJEMPLO 3 ----------------- */
// const edadPersona1 = 16;

// function evaluarEdad() {
//   const edadPermitidaMinima = 18;
//   const edadMaximaPermitia = 150;
//   const personaPermitida =
//     edadPersona1 >= 18 && edadPersona1 <= edadMaximaPermitia;

//   return personaPermitida;
// }

// const persona1Habilitada = evaluarEdad();

/* ------------- EJEMPLO 4 ------------------ */

const edadPersona1 = 16;
const edadPersona2 = 25;
const edadPersona3 = 160;

function evaluarEdad(edad) {
  const edadPermitidaMinima = 18;
  const edadMaximaPermitia = 150;
  const personaPermitida = edad >= 18 && edad <= edadMaximaPermitia;

  return personaPermitida;
}

const persona1Habilitada = evaluarEdad(edadPersona1);
const persona2Habilitada = evaluarEdad(edadPersona2);
const persona3Habilitada = evaluarEdad(edadPersona3);

/* Function sumar */

function sumar(a, b) {
  const resultado = a + b;
  return resultado;
}

console.log(sumar(2, 3));
console.log(sumar(1.2, 3.4));
