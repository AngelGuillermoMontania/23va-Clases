$inputBrillo.addEventListener("input", () => {
  $divCard.style.filter = divCard.style.filter + " " + `brightness(${$inputBrillo.value})`;
});

$inputContrast.addEventListener("input", () => {
  $divCard.style.filter = divCard.style.filter + " " + `contrast(${$inputContrast.value})`;
});

/* 

let cosa = "hola"
cosa = "chau"
console.log(cosa)

const nombre = "Guille"
const saludo = "Hola"
const saludoCompleto = saludo + " " + nombre
console.log(saludoCompleto)


let edad = 18
edad = edad + 1

let aMultiple = "A" 
aMultiple = aMultiple + "A"

*/
