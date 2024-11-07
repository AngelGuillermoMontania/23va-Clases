/* -------- Funciones Nativas De Strings -------- */

// console.log("Guillermo Montaña".length)   // Devuelve el largo del string
// console.log("HolA".toLowerCase())    // Devuelve el string en minusculas
// console.log("holA".toUpperCase())    //  Devuelve el string en mayusculas
// console.log("Hola".includes("Ha"))      // True o false, si incluye el parametro enviado  - SENSITIVO en mayusculas y minusculas
// console.log("Hola".concat(" Chau"))  // une dos textos
// console.log("Hola".repeat(2))   // Repite el string la cantidad de veces ingresada
// console.log("Hola".replace("Ho", "Ch"))   // Remplaza en el string el primer parametro por lo ingresado en el segundo
// console.log("Hola".padStart(10, "0"))   // Llena la cantidad pasada como primer parametro con el string pasado como segundo parametro
// console.log(String(true))

/* ------- Funciones Nativas De Numeros (Number) -------*/
console.log(parseInt(5.4))
console.log(parseFloat(5.1))
console.log(Math.floor(5.9))
console.log(Math.ceil(5.1))
console.log(Math.round(5.5))
console.log(Math.random())
console.log(RegExp("/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&])([A-Za-z\d$@$!%*?&]|[^ ]){8,15}$/").test("Hola!36034"))


// "Hola"
//  ||||
//  0123