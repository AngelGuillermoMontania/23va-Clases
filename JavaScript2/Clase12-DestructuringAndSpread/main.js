// const categorias = ["Comida", "Servicios", "Salidas", "Demas"]

// const operaciones = [
//   {
//     id: 1,
//     descripcion: "Panchitos - HotDog",
//     categoria: "Comida",
//     fecha: "2025-29-01",
//     monto: -25000,
//     tipo: "Gasto"
//   },
//   {
//     id: 2,
//     descripcion: "Salario",
//     categoria: "Trabajo",
//     fecha: "29/1/2025",
//     monto: 100000,
//     tipo: "Ganancia"
//   },
//   {
//     id: 3,
//     descripcion: "Mouse",
//     categoria: "Trabajo",
//     fecha: "29/1/2025",
//     monto: 80000,
//     tipo: "Gasto"
//   }
// ]

// let arrayFechas = []
// let sumaTotal = 0
// for (let i = 0; i < operaciones.length; i++) {
//   const { monto, fecha } = operaciones[i]
//   sumaTotal += monto
//   arrayFechas.push(fecha)
// }

/* 



function $ (elem) {
  document.querySelector(elem)
}

const $inputDescripcion = $("#descripcion")

operaciones.push({
  descripcion: $inputDescripcion.value
})

*/





/*  ---------------------------- DESTRUCTURING --------------------------- */
/* ------ARRAYS */
// const nombres = ["Deborah", "Profe", "Nadia", "Sara"]
// const persona0 = nombres[0]
// const persona1 = nombres[1]
// const persona2 = nombres[2]

// Destructuring de un array importan las posiciones
// const nombres = ["Deborah", "Profe", "Nadia", "Sara"]
// const [ persona0, persona1, persona2 ] = nombres  //  persona0 = "Deborah"  persona1="Profe"   persona2="Nadia"
// const [ persona2 ] = nombres  //  persona2 = Deborah   
// const [ , , persona2 ] = nombres  // persona2 = "Nadia"
// const [pepe, cosa, tucutucu] = nombres  //  pepe = "Deborah"
// const [, pepe, tucutucu  ] = nombres  //  pepe = "Profe"



/* ------Objetos */
// const persona = {
//   nombre: "Guille",
//   apellido: "Montaña",
//   edad: 32
// }
// const edad = persona.edad

// const persona = {
//   apellido: "Montaña",
//   edad: 32,
//   nombre: "Guille",
// }

// const { edad, apellido, profesiones } = persona

// console.log(edad) //    32
// console.log(apellido) // "Montaña"
// console.log(profesiones) // undefined

// function saludar({nombre, apellido, edad, lenguaje}) {
//   const nombreEnMayuscula = obj.nombre.toUpperCase()
//   return `Hola! Me llamo ${nombreEnMayuscula} ${apellido}, tengo ${edad} años, me dedico a programan en ${lenguaje}`
// }

// console.log()

// saludar(persona)


// const producto = {
//   tipo: "Madera",
// }

// const { tipo } = producto

// const numeros = [ 54, 987, 32, 1]
// // let [ loquita, cosa, pepito, jacinta ] = numeros
// let loquita = numeros[0]
// let cosa = numeros[1]
// let pepito = numeros[2]
// let jacinta = numeros[3]


// function cambiar() {
//   pepito = 57
// }

// console.log(numeros)  ===>  [ 54, 987, 32, 1]
// console.log(pepito)



/* ------------- SPREAD OPERATOR ------------ */

/* Copia blanda */
// const persona = {
//   nombre: "Guille",
//   edad: 32
// }

// const loquita = {
//   apellido: "Montaña",
//   ...persona,
// }

// console.log(persona)
// console.log(loquita)

// const numeros = [545,6,7,47845,7485]

// const copiaNumeros = [...numeros]
// console.log(copiaNumeros)

/* -------------- REST OPERATOR */

const profe = {
  nombre: "Guille",
  edad: 32,
  apellido: "Montaña",
  lenguajeProgramacion: "JavaScript",
}

const { nombre, ...args} = profe

console.log(args)  /* { edad: 32, apellido: "Montaña", lenguajeProgramacion: "JavaScript", } */