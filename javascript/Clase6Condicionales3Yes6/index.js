/* --------------- EJEMPLO SCOPE ------------- */

// const persona = "Profe Guille";

// function contador() {
//   // console.log(persona);
//   let aux = 1;
//   if (aux === 1) {
//     var perro = "Toby";
//     let aux1 = 70;
//     console.log(aux);
//     console.log(persona);
//     if(true) {
//       dsajkhdjksadsa
//     }
//   }
//   console.log(perro);
//   console.log(aux1);
//   return "Hola";
// }

// const cosa = contador();

// console.log(aux);

// console.log(cosa);

/* ---------------- FIN DE EJEMPLO SCOPE -------------- */

// let edad = 30;

/* ----- CODIGO NUEVO O ECMAScript6 ------ */
// function saludar(nombre, apellido, saludo) {
//   edad -= 10;

//   return `${saludo}! Soy ${nombre} ${apellido}`;
// }

/* ----- CODIGO ANTIGUO ------ */
// function saludar(nombre, apellido, saludo) {
//   edad = edad - 10;

//   return saludo + "! Soy " + nombre + " " + apellido;
// }

/* LEGACY VS ECMA6 */

// LEGACY
// var cosa = "Hola";
// ECMA se usa const y let

// LEGACY
// const nombre = "Guille"
// console.log("Hola " +  nombre)
// ECMA ---- TEMPLATE STRING
// const nombre = "Guille";
// console.log(`Hola ${nombre}`);

// LEGACY
// Solo se podia trabajar con funciones, se les dice declaradas o nombradas
// function saludar() {
//   return "Hola People";
// }

// // Funcion anonima
// const saludar = function () {
//   return "Hola People";
// };

// LEGACY
// const edad = 18;
// let puedeEntrar = "";
// if (edad >= 18) {
//   puedeEntrar = "Tiene Permitido";
// } else {
//   puedeEntrar = "No tiene permitido entrar";
// }
/* TERNARIO  ====> CONDICIONAL SOLO IF Y ELSE*/

// const edad = 18
// const puedeEntrar = edad >= 18 ? "Tiene Permitido" : "No tiene permitido entrar";
// condicion ? caso true : caso false

// function saludar() {
//   saludar();
// }

// Funciones flecha  ==> Siempre es anonima

// Primer ejemplo en el que
// 1) No tengo parametros
// 2) Tengo mas de una instruccion en el scope de la funcion
// const saludar = () => {
//   const edad = 45;
//   return `Hola! Tengo ${edad} años de edad!`;
// };

// Segundo ejemplo en el que
// 1) Tengo un parametro
// 2) Tengo mas de una instruccion en el scope de la funcion
// const saludar = nombre => {
//   const edad = 45;
//   return `Hola soy ${nombre}! Tengo ${edad} años de edad!`;
// };

// Tercer ejemplo. En el que
// 1) Tengo mas de un parametro
// 2) Tengo mas de una instruccion en el scope de la funcion
// const saludar = (nombre, apellido) => {
//   const edad = 45;
//   return `Hola soy ${nombre} ${apellido}! Tengo ${edad} años de edad!`;
// };

// Cuarto ejemplo. En el que
// 1) No tengo argumentos
// 2) Tengo simplemente la instruccion del return
// const saludar = () => "Hola Como va?"

// Diferencia con funcion
const saludar = nombre => `Hola Como va? soy ${nombre}`

function saludar1(nombre) {
  return `Hola Como va? soy ${nombre}`
}