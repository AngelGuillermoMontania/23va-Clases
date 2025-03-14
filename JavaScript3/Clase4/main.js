const $ = element => document.querySelector(element)
const $$ = element => document.querySelectorAll(element)

let page = 1;
let pageMax = 0;

const $textSearch = $("#text-search")
const $buttonSearch = $("#button-search")
const $containerImages = $("#container-images")
const $containerDetail = $("#container-detail")
const $containerButtons = $("#container-buttons")
const $buttonPrev = $("#button-prev")
const $buttonNext = $("#button-next")
const $H1page = $("#page")

function pintarDatos(array) {  //  [{…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}]
  $containerImages.innerHTML = ""
  for (const imagenesAPI of array) {  // {…}
    $containerImages.innerHTML += `<img src="${imagenesAPI.urls.full}" />`
  }
}

$buttonSearch.addEventListener("click", () => {
  $containerImages.innerHTML = ""
  $containerImages.innerHTML = `<h1>Loading...</h1>`
  $H1page.innerText = page;
  fetch(`https://api.unsplash.com/search/photos?query=${$textSearch.value}&page=${page}&orientation=portrait`, {
    method: "GET",
    headers: {
      Authorization: 'Client-ID HNdAAG8XrTJEMHAuJBQAWAXeyFceoE-lU3mndhodxnE'
    }
  })
    .then(res => res.json())
      .then(response => {
        pageMax = response.total_pages
        pintarDatos(response.results)
      })
    .catch(error => {
      console.log(error)
    })
 
})

$buttonPrev.addEventListener("click", () => {
  $containerImages.innerHTML = ""
  $containerImages.innerHTML = `<h1>Loading...</h1>`
  if(page != 1) {
    page -= 1;
  }
  $H1page.innerText = page;
  fetch(`https://api.unsplash.com/search/photos?query=${$textSearch.value}&page=${page}&orientation=portrait`, {
    method: "GET",
    headers: {
      Authorization: 'Client-ID HNdAAG8XrTJEMHAuJBQAWAXeyFceoE-lU3mndhodxnE'
    }
  })
    .then(res => res.json())
      .then(response => {
        pintarDatos(response.results)
      })
    .catch(error => {
      console.log(error)
    })
})

$buttonNext.addEventListener("click", () => {   // dog
  $containerImages.innerHTML = ""
  $containerImages.innerHTML = `<h1>Loading...</h1>`
  if(page < pageMax && page >= 1) {
    page = page + 1;     
  }
  $H1page.innerText = page;
  fetch(`https://api.unsplash.com/search/photos?query=${$textSearch.value}&page=${page}&orientation=portrait`, { 
    method: "GET",
    headers: {
      Authorization: 'Client-ID HNdAAG8XrTJEMHAuJBQAWAXeyFceoE-lU3mndhodxnE'
    }
  })
    .then(res => res.json())
      .then(response => {
        pintarDatos(response.results)
      })
    .catch(error => {
      console.log(error)
    })
})

/* 
client id   722018
access key  HNdAAG8XrTJEMHAuJBQAWAXeyFceoE-lU3mndhodxnE
secret      xbPYcVTNzpyMEdTCVkoEMa48rN-W6-oCytEeSBnN4HI

Authorization: Client-ID YOUR_ACCESS_KEY
*/

/* 


tendria que plasma esto

funcion dibujarCuadritosPaginas {
  pageMax =====> La cantidad de cuadros a dibujar 
  for(let i = 1; i <= pageMax; i++) {
    contenedorDeLosCuadros.innerHTML += <div id="i" class="">{i}</div>
  }

  A cada div de las cajitas que muestran las paginas deberia hacer que funcionen
  usar onClick en cada cajita

  cuando hagan click
  page = cajita sobre la que se hizo
}

*/


setTimeout(() => {

}, 1000)