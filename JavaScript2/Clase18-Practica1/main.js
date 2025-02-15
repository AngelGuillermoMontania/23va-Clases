import pepe from "./funciones.js"

/* Funciones selectoras de elementos HTML */
const $ = element => document.querySelector(element)
const $$ = element => document.querySelectorAll(element)

/* Selecciones de elementos HTML */
const $formCreate = $("#form-create")

/* Evento de creacion de una venta */
$formCreate.addEventListener("submit", (evento) => {
  evento.preventDefault();

  const nuevaVenta = {
    id: crypto.randomUUID(),
    type: evento.target[0].value,
    value: Number(evento.target[1].value),
    date: dayjs(evento.target[2].value).format("DD-MM-YYYY"),
    quantity: Number(evento.target[3].value)
  }

  pepe.agregarVenta(nuevaVenta)

  // inexistentePintarDatos()
})