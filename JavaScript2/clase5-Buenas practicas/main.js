const $ = (element) => document.querySelector(element)
const $$ = (element) => document.querySelectorAll(element)

let numeros = [5, 1, 67, 92, 10, 143, 2];

function dibujarNumeros() {
	const $ulNumeros = $("#numeros");
	$ulNumeros.innerHTML = "";
	for (const numero of numeros) {
		$ulNumeros.innerHTML += `<li>${numero}</li>`;
	}
}

function agregarNumeroAlArray(array) {
	array.push(Math.floor(Math.random() * 100));
}

function multiplicarPorDos(array) {
	array = array.map(elem => elem * 2);
}

window.onload = () => {

	dibujarNumeros();

	$("#agregar").addEventListener("click", () => {
		agregarNumeroAlArray(numeros);   // 1 agrega el numero y la funcion solo agrega el numero
		dibujarNumeros()  // 2 Dibuja en el html y la funcion solo dibuja en el HTML
	});
	
	$("#multiplicar").addEventListener("click", () => {
		multiplicarPorDos(numeros); // 1 multiplica
		dibujarNumeros() // 2 Dibuja en el html y la funcion solo dibuja en el HTML
	});

}
