import { obtenerPopulares, datos, obtenerDetallePelicula, detallePelicula } from "./funciones.js";

const $ = (element) => document.querySelector(element);
const $$ = (element) => document.querySelectorAll(element);

let page = 1;
let pageMax = 0;

const $inputTextSearch = $("#text-search");
const $buttonSearch = $("#button-search");
const $containerMovies = $("#container-images");
const $containerDetail = $("#container-detail");
const $containerButtons = $("#container-buttons");
const $buttonPrev = $("#button-prev");
const $buttonNext = $("#button-next");
const $H1page = $("#page");
const $btnPopulares = $("#populares");

function pintarDatos(array) {
  $containerMovies.innerHTML = "";
  for (const imagenesAPI of array) {
    // {…}
    $containerMovies.innerHTML += `<img id="${imagenesAPI.id}" class="img" src="https://image.tmdb.org/t/p/original${imagenesAPI.poster_path}" />`;
  }

  const imagenesDibujadas = $$(".img")

  imagenesDibujadas.forEach(elem => {
    elem.addEventListener("click", async () => {
      console.log("1")
      await obtenerDetallePelicula(elem.id)
      console.log("4")
      $containerDetail.innerHTML = `<div>
        <h1>${detallePelicula.title}</h1>
      </div>`
    })
  })

}

window.onload = async () => {
  
  await obtenerPopulares()

  pintarDatos(datos)
};

/* 

eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyYWRmZDU4MzhmZDE2Yzk5MzZhYjYyNTYyZGFhY2UwYiIsIm5iZiI6MTcwNTcwMzUwOC45NDksInN1YiI6IjY1YWFmODU0MGM0YzE2MDBjYTdiYTY3OSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.vNt7GS0ttWXcl0A5BXzXeRrdunRor2XOIq7XkhIVj-U

mas populares https://api.themoviedb.org/3/movie/popular
busqueda https://api.themoviedb.org/3/search/movie
detalle https://api.themoviedb.org/3/movie/{movie_id}

*/
