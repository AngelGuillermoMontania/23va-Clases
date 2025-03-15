const $ = (element) => document.querySelector(element);
const $$ = (element) => document.querySelectorAll(element);

let page = 1;
let pageMax = 0;

const $textSearch = $("#text-search");
const $buttonSearch = $("#button-search");
const $containerImages = $("#container-images");
const $containerDetail = $("#container-detail");
const $containerButtons = $("#container-buttons");
const $buttonPrev = $("#button-prev");
const $buttonNext = $("#button-next");
const $H1page = $("#page");

function pintarDatos(array) {
  //  [{…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}]
  $containerImages.innerHTML = "";
  for (const imagenesAPI of array) {
    // {…}
    $containerImages.innerHTML += `<img src="${imagenesAPI.urls.full}" />`;
  }
}

$buttonSearch.addEventListener("click", () => {
  $containerImages.innerHTML = "";
  $containerImages.innerHTML = `<h1>Loading...</h1>`;
  $H1page.innerText = page;
  axios(`https://api.unsplash.com/search/photos?query=${$textSearch.value}&page=${page}&orientation=portrait`, {
    headers: {
      Authorization: "Client-ID HNdAAG8XrTJEMHAuJBQAWAXeyFceoE-lU3mndhodxnE",
    }
  })
    .then(response => {
      pintarDatos(response.data.results);
    })
    .catch((error) => {
      console.log(error);
    });
});

$buttonPrev.addEventListener("click", () => {
  $containerImages.innerHTML = "";
  $containerImages.innerHTML = `<h1>Loading...</h1>`;
  if (page != 1) {
    page -= 1;
  }
  $H1page.innerText = page;
  axios(`https://api.unsplash.com/search/photos?query=${$textSearch.value}&page=${page}&orientation=portrait`, {
    headers: {
      Authorization: "Client-ID HNdAAG8XrTJEMHAuJBQAWAXeyFceoE-lU3mndhodxnE",
    }
  })
    .then((response) => {
      console.log("HOLAAA")
      pintarDatos(response.data.results);
    })
    .catch((error) => {
      console.log(error);
    });

  // agregarOnClick
});

$buttonNext.addEventListener("click", () => {
  // dog
  $containerImages.innerHTML = "";
  $containerImages.innerHTML = `<h1>Loading...</h1>`;
  if (page < pageMax && page >= 1) {
    page = page + 1;
  }
  $H1page.innerText = page;

  axios(`https://api.unsplash.com/search/photos?query=${$textSearch.value}&page=${page}&orientation=portrait`, {
    headers: {
      Authorization: "Client-ID HNdAAG8XrTJEMHAuJBQAWAXeyFceoE-lU3mndhodxnE",
    }
  })
    .then((response) => {
      pintarDatos(response.data.results);
    })
    .catch((error) => {
      console.log(error);
    });


  // onClick
});

/* 
---------------- AXIOS -----------------------

* Ahorramos la linea de .json, axios lo hace solo por detras
* Ahora la respuesta, junto con el codigo de estado y headers viene todo junto. Los datos siempre estaran en la key data
* Agrega seguridad informatica
* Facilita el uso de otros metodos distintos de GET

*/
/*  ----------- COMPARACION ENTRE AXIOS Y FETCH ----------------------- */
// fetch(`https://api.unsplash.com/search/photos?query=${$textSearch.value}&page=${page}&orientation=portrait`, {
//   headers: {
//     Authorization: "Client-ID HNdAAG8XrTJEMHAuJBQAWAXeyFceoE-lU3mndhodxnE",
//   }
// })
//   .then(res => res.json())
//   .then((response) => {
//     pintarDatos(response.results);
//   })
//   .catch((error) => {
//     console.log(error);
//   });
    
// axios(`https://api.unsplash.com/search/photos?query=${$textSearch.value}&page=${page}&orientation=portrait`, {
//   headers: {
//     Authorization: "Client-ID HNdAAG8XrTJEMHAuJBQAWAXeyFceoE-lU3mndhodxnE",
//   }
// })
//   .then((response) => {
//     pintarDatos(response.data.results);
//   })
//   .catch((error) => {
//     console.log(error);
//   });
/*  ----------- FIN DE COMPARACION ENTRE AXIOS Y FETCH ----------------------- */


/*  --------------------------- ASYNC/AWAIT -------------------------------- */
// * El await solo se escribe sobre las promesas
// * Mejor lectura y orden de codigo
// * Me permite manejar de mejor manera cuando son mas de una promesa
// * Evitamos el famoso callbackHell, then concatenados
// * Si en algun momento de todo el try, alguna promesa no se cumple salta el catch automaticamente
// * Me permite guardar la respuesta en una variable
// * Espera a que se resuelvan las promesas gracias al await, no se ejecutan cosas en segundo plano y evita errores

/*  --------------------------- .then/.catch -------------------------------- */
// * No se escribe await por que se maneja con .then y .catch
// * Peor lectura y orden de codigo
// * El manejo de varias promesas, es confuso y tardio
// * El manejor de varias promesas, puede resultar en callbackHell
// * Si no coloco el catch correspondiente a cada promesa, no salta el catch. Manejo complejo del catch
// * No puedo guardar la respuesta en una variable
// * NO ESPERA por la resolucion de la promesa,se ejecuta en segundo plano, y eso genera errores y problemas
async function obtenerDatos() {
  try {
    const response = await axios(`https://api.unsplash.com/search/photos?query=${$textSearch.value}&page=${page}&orientation=portrait`, {
      headers: {
        Authorization: "Client-ID HNdAAG8XrTJEMHAuJBQAWAXeyFceoE-lU3mndhodxnE",
      }
    })
    pintarDatos(response.data.results)
  } catch (error) {
    console.log(error)
  }
}



/*  ----------------------- COMPARACION DE API POKEMON ENTRE    .then/.catch     y      async/await */
// function obtenerDatos(page) {
//   let pokemones = []
//   fetch(`https://pokeapi.co/api/v2/pokemon`)    // funciones.obtenerDatosLocalStorage()
//     .then(res => res.json())
//     .then(response => {                               
//       pokemones = response.results;
//       const promesasPokemones = pokemones.map((elem) => fetch(elem.url))    // [fetch(primerP.url), fetch(segundoP.url)]
//       Promise.all(promesasPokemones)   //   [{respuesta}, {respuesta}, {respuesta}]
//         .then(res => Promise.all(res.map(elem => elem.json())))
//         .then(resolve => {
//           console.log(resolve)
//         })
//           .catch(error => console.log(error))
//       // pintarDatos(characters)                        //  pintarDatos
//     })
//     .catch(error => {
//       $containerCards.innerHTML = ""
//       // $containerCards.innerHTML = "<img src="">"
//     })
// }
// async function obtenerDatos(page) {
//   try {
//     const response = await axios(`https://pokeapi.co/api/v2/pokemon`)
//     const pokemons = response.data.results
//     const todosDatosPokemones = await Promise.all(pokemons.map(elem => axios(elem.url)))
//     pintarDatos(todosDatosPokemones.data.results)
//   } catch (error) {
//     $containerCards.innerHTML = ""
//       // $containerCards.innerHTML = "<img src="">"
//   }
// }

/*  ----------------------- FIN COMPARACION DE API POKEMON ENTRE    .then/.catch     y      async/await */