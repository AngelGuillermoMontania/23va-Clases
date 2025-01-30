
// const saludo = "Hola"

// saludo.toString()
// saludo.toLowerCase()

// const numeros = [6,8,7,2,1]

// numeros.map


// // console  // ===>

// console.log()
// console.error()
// console.count()


/* EJERCICIO 5 */

// Tenemos la variable datos con un objeto que guarda datos de personas
// Tenemos que programar la siguiente lógica
// SI la propiedad programa es true
// Agregá la propiedad lenguajeFavorito, y asignale "Javascript"

// const datos = {
//   id: 1,
//   nombre: "Ada",
//   apellido: "Lovelace",
//   email: "ada.lovelace@gmail.com",
//   telefono: "1234567890",
//   edad: 29,
//   programa: true,
// };

// if(datos.programa) {
//   datos.lenguajeFavorito = "JavaScript"
// }

// // finalmente, mostramos los datos
// console.log(datos);


/* EJERCICIO 10 */

// const ganadoras = [
//   {
//     nombre: "Bebe Zahara Benet",
//     temporada: "1",
//     foto: "http://www.nokeynoshade.party/images/bebe-zahara-benet.jpg",
//   },
//   {
//     nombre: "Tyra Sanchez",
//     temporada: "2",
//     foto: "http://www.nokeynoshade.party/images/tyra-sanchez.jpg",
//   },
//   {
//     nombre: "Raja",
//     temporada: "3",
//     foto: "http://www.nokeynoshade.party/images/raja.jpg",
//   },
//   {
//     nombre: "Sharon Needles",
//     temporada: "4",
//     foto: "http://www.nokeynoshade.party/images/sharon-needles.jpg",
//   },
//   {
//     nombre: "Jinkx Monsoon",
//     temporada: "5",
//     foto: "http://www.nokeynoshade.party/images/jinkx-monsoon.jpg",
//   },
//   {
//     nombre: "Bianca Del Rio",
//     temporada: "6",
//     foto: "http://www.nokeynoshade.party/images/bianca-del-rio.jpg",
//   },
// ];

///// RESULTADO
// Bebe Zahara Benet ganó la temporada 1
// Tyra Sanchez ganó la temporada 2
// Raja ganó la temporada 3
// Sharon Needles ganó la temporada 4
// Jinkx Monsoon ganó la temporada 5
// Bianca Del Rio ganó la temporada 6

// for (let i = 0; i < ganadoras.length; i++) {
//   const {nombre, temporada} = ganadoras[i]
//   const mensaje = `${nombre} ganó la temporada ${temporada}`
//   console.log(mensaje)
// }


/* EJERCICIO 12 */

// Tenemos un objeto en la variable banda, con datos de una banda (nombre, año de lanzamiento, si sigue en actividad, una foto, los integrantes 
// y una lista de sus discos).
// Queremos mostrar:
// La duración total del disco (suma de la duración de cada canción)
// La duración promedio por canción (un promedio entre todas las duraciones)

// const banda = {
//     name: "Led Zeppelin",
//     year: 1968,
//     active: false,
//     thumbnail: "http://townsquare.media/site/295/files/2014/10/Led-Zeppelin1.jpg?w=980&q=75",
//     members: ["Jimmy Page", "Robert Plant", "John Paul Jones", "John Bonham"],
//     albums: [
//         {
//             name: "Led Zeppelin",
//             year: 1969,
//             songs: ["Good Times, Bad Times", "Communication Breakdown"],
//             duration: 2691,
//         },
//         {
//             name: "Led Zeppelin II",
//             year: 1969,
//             songs: ["Whole Lotta Love", "Moby Dick", "Ramble On"],
//             duration: 2502,
//         },
//         {
//             name: "Led Zeppelin III",
//             year: 1970,
//             songs: ["Immigrant Song"],
//             duration: 2489,
//         },
//         {
//             name: "Led Zeppelin IV",
//             year: 1971,
//             songs: ["Rock and Roll", "Stairway to Heaven", "Four Sticks"],
//             duration: 2559,
//         },
//     ],
// };

// let { year } = banda  // 1968
// const cantidadMiembros = banda.members.length
// const miembros = banda.members.join()
// const cantidadDiscos = banda.albums.length
// /* FORMA 1 */
// // let cantidadTotalCanciones = 0
// // for (let i = 0; i < banda.albums; i++) {
// //   cantidadTotalCanciones += banda.albums[i].songs.length
// // }

// /* FORMA 2 */
// const cantidadTotalCanciones = banda.albums.reduce((acc, curr) => acc + curr.songs.length, 0)
// const cantidadTotalDuracionCanciones = banda.albums.reduce((total, album) => total + album.duration, 0);
// const promedioDuracion = cantidadTotalDuracionCanciones / cantidadTotalCanciones


// ///// RESULTADO
// console.log("Led Zeppelin se fundó en el año " + year);
// console.log("Tiene " + cantidadMiembros + " miembros: " + miembros);
// console.log("Tiene en total " + cantidadDiscos + " discos");
// console.log(
//   "Tiene en total " +
//     cantidadTotalCanciones +
//     " canciones entre todos los discos."
// );
// console.log("En promedio, cada canción dura " + promedioDuracion + " segundos");
// ESPERADO
// Led Zeppelin se fundó en el año 1968
// Tiene 4 miembros: Jimmy Page, Robert Plant, John Paul Jones, John Bonham
// Tiene en total 4 discos
// Tiene en total 9 canciones entre todos los discos.
// En promedio, cada canción dura 1137.888888888889 segundos



/*  Ejercitacion 3 - Segunda Parte */

// 03 - producto
// Partiendo de un objeto guardado en la variable producto
// Mostrar en la consola el nombre y valor de todas las propiedades que tiene el producto
// Utilizar el método keys
// El formato para mostrar la propiedad y valor es: "producto['[ACA NOMBRE DE LA PROPIEDAD]'] -> [ACA VALOR DE LA PROPIEDAD]"

// const producto = {
//     id: "ADA-020",
//     title: "Gubergren sed est amet voluptua",
//     price: 123.75,
//     picture:
//         "https://i.kinja-img.com/gawker-media/image/upload/s--53mPze4a--/c_scale,f_auto,fl_progressive,q_80,w_800/1315358249455433031.jpg",
//     condition: "nuevo",
//     free_shipping: true,
//     location: "Capital Federal",
// };
  
// const arrayDeKeys = Object.keys(producto) // ["id", "title", "price"]

// for (let i = 0; i < arrayDeKeys.length; i++) {
//     const valor = producto[arrayDeKeys[i]]
//     console.log(`producto['${arrayDeKeys[i]}'] => ${valor}`)
// }

  // RESULTADO ESPERADO
  // producto['id'] -> ADA-020
  // producto['title'] -> Gubergren sed est amet voluptua
  // producto['price'] -> 123.75
  // producto['picture'] -> https://i.kinja-img.com/gawker-media/image/upload/s--53mPze4a--/c_scale,f_auto,fl_progressive,q_80,w_800/1315358249455433031.jpg
  // producto['condition'] -> nuevo
  // producto['free_shipping'] -> true
  // producto['location'] -> Capital Federal


//   const hasProperty = (object, property) => {
//     // return true si el objeto (object) tiene la propiedad (property) que llega por parametro
//     // property es un string
//     // sino return false
//     return !!object[property];
//   };

//   // hasProperty(user, "dni") {
//     // return !!user["dni"]   // false
// // }
  
//   const user = {
//     username: "ada_lovelace",
//     password: "1234567890!",
//   };
  
//   const user2 = {
//     username: "grace_hopper",
//     password: "1234567890!",
//     email: "grace@hopper.com",
//   };
  
//   console.log(hasProperty(user, "email")); // false
//   console.log(hasProperty(user, "password")); // true
//   console.log(hasProperty(user, "id")); // false
  
//   console.log(hasProperty(user2, "email")); // true
//   console.log(hasProperty(user2, "password")); // true
//   console.log(hasProperty(user2, "id")); // false



// Objetos 002
// Tenemos una variable pelicula, con propiedades que guardan información sobre una película
// Necesitamos agregar un método/función mostrarInfo que muestre por consola el 
// mensaje: "Película: [NOMBRE PELI] - Año: [AÑO PELI]"
// const pelicula = {
//     titulo: "The Dark Knight",
//     anio: 2008,
//     director: "Christopher Nolan",
//     mostrarInfo: () => {
//         console.log(`Película: ${pelicula.titulo} - Año: ${pelicula.anio}`)
//     }
// };

// pelicula.mostrarInfo();
// Película: The Dark Knight - Año: 2008




/* JSON   =====> JavaScript Object Notation */

const persona = {
    nombre: "Guille",
    edad: 32,
    vive: true,
    profesiones: ["Programador", "Viverista", "Profesor"]
}

// const personaJSON = {
//     "nombre": "Guille",
//     "edad": 32,
//     "vive": true,
//     "profesiones": ["Programador", "Viverista", "Profesor"],
//     "nivelLenguajes": [
//         {
//             "nombre": "JavaScript",
//             "nivel": 90
//         },
//         {
//             "nombre": "Python",
//             "nivel": 15
//         },
//     ],
// }

const personaJSON = JSON.stringify(persona) //  ====> Pasa de objeto JS a JSON

const personaOBJ = JSON.parse(personaJSON) //   ====> Pasa de JSON a objeto JS
