// sessionStorage    ===> Guardar datos mientras la sesion del navegador este activa.
/* El ciclo de vida, de un navegador es desde que se abrimos el navegador hasta que lo cerramos */

/* localStorage  ===>  Guarda los datos en el navegador, asociado a la url ingresada y vive todo el tiempo */

// Guardan siempre, y solo pueden guardar datos en formato JSON

// localStorage.setItem    ---> Guardar datos
// localStorage.getItem    ---> Leer Datos

//  JSON.stringify()
//  JSON.parse()

let saludos = { cosa: ["Hola", "Chau"] }; // { cosa: ["Como va?", "Chau"] }
// { "cosa": ["Como va?", "Chau"] }

/* ----------------- SET -------------------- */
// const cosaJSON = JSON.stringify(saludos);
// localStorage.setItem("prueba", cosaJSON);

// ----------------- GET --------------------
// const datos = JSON.parse(localStorage.getItem("prueba"));

// function agregarSaludo() {
//   saludos.cosa.push("Hasta Luego");
//   localStorage.setItem("prueba", JSON.stringify(saludos));
// }

// function editarSaludo() {
//   saludos.cosa[0] = "Como va?";
//   localStorage.setItem("prueba", JSON.stringify(saludos));
// }

// function eliminarSaludo() {
//   saludos.pop();
//   localStorage.setItem("prueba", JSON.stringify(saludos));
// }

// window.onload = () => {
//   saludos = JSON.parse(localStorage.getItem("prueba"));
// };

// const fecha = new Date().toUTCString();
// const fechaArg = new Date();

// console.log(`0${fecha.getDay()}/0${fecha.getMonth()}/${fecha.getFullYear()}`);
// console.log(fecha);
// console.log(fechaArg);

/* Toma una fecha de dayjs, y la formatea como quiera (string) */
// const fecha = dayjs();
// console.log(fecha.format("DD-MM-YYYY")); // "03/02/25"

/* Toma una fecha cualquiera (string) y la convierte en dayjs */
// const inputFecha = "02-02-2025";
// console.log(dayjs(inputFecha));
// console.log(dayjs(inputFecha).format("03/02/2025"));

/* Evaluar si una fecha es anterior a otra */
const fecha1 = dayjs().year(2000); // 03-02-2000
const fecha2 = dayjs();

// console.log(fecha1.isAfter(fecha2));
// console.log(fecha1.isBefore(fecha2));
console.log(fecha1.isSame(fecha2));
/*  */console.log(dayjs().format("DD/MM/YYYY"));
console.log(dayjs().format("DD-MM-YYYY"));
console.log(dayjs().isBefore(dayjs()));
console.log(dayjs().isSameOrBefore(dayjs()));
console.log(dayjs().isSameOrAfter(dayjs()));
console.log(dayjs().add(1, "day"));
console.log(dayjs().substract(1, "year"));
const fecha = dayjs.utc();
console.log(fecha.local());
