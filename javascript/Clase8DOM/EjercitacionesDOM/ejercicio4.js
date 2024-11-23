/* Hacer un programa que al iniciarse pregunte mediante un prompt por un tamaño de imagen
 (siendo las opciones posibles chica, mediana y grande) y dependiendo de la opción elegida 
 modifique el tamaño de una imagen (cualquiera) en el documento html. Por ejemplo: */

const tamaño = prompt("Ingresa un tamaño de imagen: chica, mediana o grande")
const img = document.querySelector(".mi-imagen");

if (tamaño === "chica") {
  img.style.width = "200px";
} else if (tamaño === "mediana") {
  img.style.width = "500px";
} else if (tamaño === "grande") {
  img.style.width = "800px";
} else {
  alert("Opción no válida. Intenta con chica, mediana o grande.");
}