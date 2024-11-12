/* --------- CONDICIONALES ----------- */

/* ------- EJEMPLO 1 -------- */

// const edadPersona = 78;

// if (edadPersona > 18) {
//   console.log("PERMITIDO PASAR");
// }

/* ------- EJEMPLO 2 -------- */

// const edadPersona = 78;

// if (edadPersona < 18) {
//   console.log("PERMITIDO PASAR");
// } else {
//   console.log("NO TIENE PERMITIDO ENTRAR");
// }




/* ------- EJEMPLO 3 -------- */

// const edadPersona = 16;

// if (16 >= 18) {   //   If    =====>   si?
//   console.log("PERMITIDO PASAR");
// } else if (16 >= 16) {    //  si no, si?
//   console.log("PUEDE PASAR CON PERMISO DE SUS PADRES")
// } else {   //   =====> si no...
//   console.log("NO PUEDE PASAR")
// }





/* ------- EJEMPLO 4 -------- */
// typeof Boolean    ===>  "boolean"
// const edadPersona = prompt("INGRESE SU EDAD");
// if(typeof Number(edadPersona) === "number") {
//   alert("NO ESCRIBISTE UN NUMERO")
// }

// const edadPersonaNumber = Number(edadPersona)

// if (edadPersonaNumber >= 18) {   //   If    =====>   si?
//   console.log("PERMITIDO PASAR");
// } else if (edadPersonaNumber >= 16) {    //  si no, si?
//   console.log("PUEDE PASAR CON PERMISO DE SUS PADRES")
// } else if (edadPersonaNumber < 16) {
//   console.log("NO PUEDE PASAR ES MUY CHICO")
// } else if (edadPersonaNumber > 200) {
//   console.log("IMPOSIBLE QUE TENGA USTED 200 AÑOS")
// } else {   //   =====> si no...
//   console.log("NO PUEDE PASAR")
// }

// ------- EJEMPLO 5  (MAL HECHO) --------

// const edadPersona = prompt("INGRESE SU EDAD");   //  20

// if(typeof Number(edadPersona) === "number") {
//   alert("NO ESCRIBISTE UN NUMERO")
// }

// const edadPersonaNumber = Number(edadPersona)

// if (edadPersonaNumber >= 16) {   //   If    =====>   si?
//   console.log("PERMITIDO PASAR");   // 1
// } else if (edadPersonaNumber >= 18) {    //  si no, si?
//   console.log("PUEDE PASAR CON PERMISO DE SUS PADRES")  // 2
// } else if (edadPersonaNumber < 16) {
//   console.log("NO PUEDE PASAR ES MUY CHICO")  // 3
// } else if (edadPersonaNumber > 200) {
//   console.log("IMPOSIBLE QUE TENGA USTED 200 AÑOS")  // 4
// } else {   //   =====> si no...
//   console.log("NO PUEDE PASAR")   // 4
// }


// ------- EJEMPLO 6  --------

// const edadPersona = prompt("INGRESE SU EDAD");   //  20

// if(typeof Number(edadPersona) === "number") {
//   alert("NO ESCRIBISTE UN NUMERO")
// }

// const edadPersonaNumber = Number(edadPersona)

// if (edadPersonaNumber >= 18) {   //   If    =====>   si?
//   console.log("PERMITIDO PASAR");   // 1
// } else if (edadPersonaNumber >= 16) {    //  si no, si?
//   console.log("PUEDE PASAR CON PERMISO DE SUS PADRES")  // 2
// } else if (edadPersonaNumber < 16 || edadPersonaNumber > 200) {
//   console.log("NO PUEDE PASAR")  // 3
// }

// if (edadPersonaNumber >= 18 || edadPersonaNumber < 200) {  
//   console.log("PERMITIDO PASAR");
//   if(edadPersonaNumber === 30) {
//     console.log("TIENE 50% DE DESCUENTO")
//   } else if(edadPersonaNumber === 40) {
//     console.log("TIENE 25% DE DESCUETO")
//   } else {
//     console.log("NO TIENE DESCUENTO")
//   }
// } else if (edadPersonaNumber === 16 || edadPersonaNumber === 17) {   
//   console.log("PUEDE PASAR CON PERMISO DE SUS PADRES")  
// } else {
//   console.log("NO PUEDE PASAR") 
// }

// ---------- EJEMPLO 7 ----------

// const edadPersona = prompt("INGRESE SU EDAD");   //  30

// function puedePasar(edad) {
//   if(typeof Number(edad) === "number") {
//     alert("NO ESCRIBISTE UN NUMERO")
//   }
  
//   const edadPersonaNumber = Number(edad)
  
  // let aux = ""  // ""
  // if (edadPersonaNumber >= 18 && edadPersonaNumber < 200) {  
  //   aux = "PERMITIDO PASAR";  // "PERMITIDO PASAR"
  //   if(edadPersonaNumber === 30) {
  //     aux = aux + ", TIENE 50% DE DESCUENTO"   // "PERMITIDO PASAR TIENE 50% DE DESCUENTO"
  //   } else if(edadPersonaNumber === 40) {
  //     aux = aux + ", TIENE 25% DE DESCUENTO"
  //   } else {
  //     aux = aux + ", NO TIENE DESCUENTO"
  //   }
  // } else if (edadPersonaNumber === 16 || edadPersonaNumber === 17) {   
  //   aux = "PUEDE PASAR CON PERMISO DE SUS PADRES"
  // } else {
  //   aux = "NO PUEDE PASAR"
  // }
  
  // return aux
// }

// const evaluacion = puedePasar(edadPersona)































/* escritura en javascript */
// holaComoEstas
// angelMontaña
// edadPersona

/* Valores que evaluan true o false */

if (!!"") {
  console.log("Hola")
}

// "Hola"       =====>  true
// ""           =====>  false
// undefined    =====>  false
// null         =====>  false
// 0            =====>  false
// -1           =====>  true

// !"Hola"      =====>  false
// !""          =====>  true
// !!""         =====>  false            "" = false       !"" = true       !!"" = false

// NaN          =====>  false      Por ejemplo:   Number("Hola")