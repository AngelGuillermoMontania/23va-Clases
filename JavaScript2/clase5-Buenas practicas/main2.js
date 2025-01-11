const $ = (selector) => document.querySelector(selector);
const $$ = (selector) => document.querySelectorAll(selector);

let numeros = [5, 1, 67, 92, 10, 143, 2];

function dibujarNumeros(array) {
  const $ulLista = $("#lista");
  $ulLista.innerHTML = "";
  for (const numero of array) {
    $ulLista.innerHTML += `<li>${numero}</li>`;
  }
}

function agregarNumero() {
  numeros.push(Math.floor(Math.random() * 100));
}

window.onload = () => {
  dibujarNumeros(numeros);

  $("#agregar").onclick = () => {
    agregarNumero();
    dibujarNumeros(numeros);
  };

  $("#multiplicar").onclick = () => {
    numeros = numeros.map((numero) => numero * 2);
    dibujarNumeros(numeros);
  };
};
