/* Hacer un programa que al iniciarse pregunte mediante prompts por

un título
una url de una imagen
una url a un artículo
Utilizar esos datos para completar en el html una card que tenga

una imagen, con la url de la imagen ingresada
un título, con el texto del título ingresado
un link que diga Leer más, con la url al artículo ingresado
Dar algunos estilos mínimos a la card:

centrarla con respecto a la pantalla
agregarle un borde
agregarle un sombreado
cambiarle la tipografía
cambiarle los tamaños de fuente
cambiarle los colores por defecto
 */

/*  FORMA 1 */
// const titulo = prompt('ingrese un titulo');
// const url = prompt('ingrese la url de imagen');
// const urlArticul = prompt('ingrese la url del articulo')

// const titulo1 = document.querySelector('#titulo')
// titulo1.innerText = titulo;
// const url1 = document.querySelector('#img')
// url1.src = url
// const urlArticul1 = document.querySelector('#url')   // <a id='url'>Ver mas...</a>
// urlArticul1.href = urlArticul;

// const card = document.querySelector('#card');
// card.style.border = "2px solid black";
// card.style.boxShadow = "0 4px 12px black";
// card.style.fontFamily = "arial";
// card.style.fontSize = "30px";
// card.style.color = "red";

/* FORMA 2 */
const titulo = prompt('ingrese un titulo');
const url = prompt('ingrese la url de imagen');
const urlArticul = prompt('ingrese la url del articulo')

const body = document.querySelector('body')

body.innerHTML = `<div class="card">
  <h1>${titulo}</h1> 
  <img src="${url}"> 
  <a href="${urlArticul}">Ver Mas..</a>
</div>`