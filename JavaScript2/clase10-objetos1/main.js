// Arrays ===> []
// Objetos ===> {} 
// const persona = {
//   apellido: "Montaña",
//   edad: 32,
//   nombre: "Guille",
//   estaVivo: true,
//   saludar: () => {
//     return "Hola gente"
//   }
// }

/* ---------- COMPARACION CON ARRAYS ----------- */

/* 
Array 
* Si importa la posicion de los datos
* Al valor/value accedo mediante el index/indice de la posicion que necesito.  numeros[6]
* En un array puedo guardar cualquier tipo de dato
* En un array puedo colocar infinitos valores
* En un array arr[6] = "Hola"

Objeto
* No importa la posicion de los datos
* Al valor/value accedo mediante su key/clave
* En un objeto puedo guardar cualquier tipo de dato, mientras se acompañe de su clave. persona.nombre
* En un objeto puedo colocar infinitos pares clave/
* En un objeto persona.edad = 18
*/

/* Modificar un valor */
// persona.edad = 18

// /* Agregar un nuevo par key-value */
// persona.pais = "Argentina"

// /* Eliminar un par clave-valor. Directamente, no podemos */
// persona.nombre = undefined





// UN GRUPO DE PERSONAS
// const grupoPersonas = [
//   {
//     id: 1,
//     nombre: "Guillermo",
//     numeroTelefono: 2644576693,
//   }, {
//     id: 2,
//     nombre: "Sara",
//     numeroTelefono: undefined,
//   }, {
//     id: 3,
//     nombre: "Nadia",
//     numeroTelefono: 56465847456465
//   }
// ]


// for (const persona of grupoPersonas) {
//   if(persona.numeroTelefono !== undefined) {
//     console.log("PUEDES LLAMAR")
//   } else {
//     console.log("NO PUEDES LLAMAR")
//   }
// }





// const productos = [
//   {
//     nombre: "Kit Discos",
//     marca: "Body",
//     tamañosPie: undefined,
//     precio: 57000,
//     peso: "30kg"
//   }, {
//     nombre: "Ojotas",
//     marca: "Kyoshi",
//     tamañosPie: ["37", "38, 39"],
//     precio: 86542,
//     peso: undefined,
//   }
// ]






/*  Segunda forma de acceder a un valor del objeto. NO SE USA COMUNMENTE
persona["edad"]
 */




/*  -------------- VALORES POR REFERENCIA Y POR VALOR ---------- */

// let numero = 5

// let numero2 = numero

// numero = 67

// console.log(numero2) // 5



// const cosa = {
//   nombre: "cosa"
// }

// let cosa2 = cosa

// cosa.nombre = "pepeHonguito";

// console.log(cosa2.nombre)




// let cosa3 = cosa;
// let cosa4 = cosa;
// let cosa5 = cosa;


// const serViviente = {
//   estaVivo: true,
//   terricola: true,
// }

// const animal = new serViviente()
// animal.estaVivo

// const humano = new serViviente()

class serViviente {
  constructor() {
    this.estaVivo = true;
    this.terricola = true;
  }

  saludar() {
    return "Hola como va?"
  }
}

class animal extends serViviente {
  constructor(habitat, nombre) {
    super();
    this.habitat = habitat;
    this.nombre = nombre;
  }

}

const perro = new animal("Tierra", "Toby")

console.log(perro)