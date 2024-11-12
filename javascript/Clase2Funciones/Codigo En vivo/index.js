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

// const edadPersona1 = 16;
// const edadPersona2 = 25;
// const edadPersona3 = 160;

// function evaluarEdad(edad) {
//   const edadPermitidaMinima = 18;
//   const edadMaximaPermitia = 150;
//   const personaPermitida = edad >= 18 && edad <= edadMaximaPermitia;

//   return personaPermitida;
// }

// const persona1Habilitada = evaluarEdad(edadPersona1);
// const persona2Habilitada = evaluarEdad(edadPersona2);
// const persona3Habilitada = evaluarEdad(edadPersona3);

/* Ejercitacion - Function sumar */

// function sumar(a, b) {
//   const resultado = a + b;
//   return resultado;
// }

// console.log(sumar(2, 3));
// console.log(sumar(1.2, 3.4));

// -------------- EJEMPLO 5  -----------------
// const nombre = "Guille"
// const apellido = "Perez"

// function saludar(cositaDelCoso, apellido, edad) {
//   return `Hola, soy ${cositaDelCoso} ${apellido}, y tengo ${edad} años de edad!`
// }

// console.log(saludar(nombre, "honguito", 32))

// -------------- EJEMPLO 6  -----------------

// const cosita = "banana"

// function licuadora(fruta, liquido, otroProducto) {
//   return `Tu licuado de ${fruta}, ${liquido} y ${otroProducto}`
// }

// const licuadoGenerado = licuadora(cosita, "leche", "azucar")

// function tomarLicuado(persona, licuado) {
//   return `${persona} toma ${licuado}`
// }

// tomarLicuado("Guille", licuadoGenerado)

// --------------- PALABRAS RESERVADAS ----------------
// const
// let
// function

// ----------  EJEMPLO 7 ---------------

// console.log("1")
// const cosita = "banana"
// console.log("2")
// function licuadora(fruta, liquido, otroProducto) {
//   console.log("3")
//   return `Tu licuado de ${fruta}, ${liquido} y ${otroProducto}`
//   console.log("4")
// }
// console.log("5")
// const licuadoGenerado = licuadora(cosita, "leche", "azucar")

//  1   2    5   3

// ----------  EJEMPLO 8 ---------------

// const cosita = "banana"

// function licuadora(fruta, liquido, otroProducto) {
//   return `Tu licuado de ${fruta}, ${liquido} y ${otroProducto}`
// }

// const licuadoGenerado = licuadora("azucar", "leche")

// console.log(licuadoGenerado)

// ----------  EJEMPLO 9 ---------------

// const cosita = "banana"

// function licuadora(fruta, liquido, otroProducto) {
//   return `Tu licuado de ${fruta}, ${liquido} y ${otroProducto}`
// }

// const licuadoGenerado = licuadora(cosita, "leche", "edulcorante")

/* ------- EJEMPLO 10  --------------- */

// const cosita = "banana"

// function licuadora(fruta, liquido, otroProducto) {
//   return `Tu licuado de ${fruta}, ${liquido} y ${otroProducto}`
// }

// function tomarLicuado(persona, pepeHonguito) {
//   return `${persona} toma ${pepeHonguito}`
// }

// console.log(tomarLicuado("Guille", licuadora(cosita, "leche", "azucar")))

const edad = 22 
const edad2 = 16

function calcularEdad(edad) {
  return edad * 5
}

const edadMultiplicada = calcularEdad(edad)
const edadMultiplicada2 = calcularEdad(edad2)