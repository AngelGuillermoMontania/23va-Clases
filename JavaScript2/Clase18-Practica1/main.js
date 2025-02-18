import funciones from "./funciones.js"

/* Funciones selectoras de elementos HTML */
const $ = element => document.querySelector(element)
const $$ = element => document.querySelectorAll(element)

/* Selecciones de elementos HTML */
const $formCreate = $("#form-create")
const $formEdit = $("#form-edit")
const $sectionViewHome = $("#view-home")
const $sectionViewVenta = $("#view-venta")
const $sectionViewReporte = $("#view-reporte")
const $divListVentas = $("#list-ventas")
const $selectFilterType = $("#select-filter-type")
/* Selecciones de elementos para EDICION */
const $selectEditType = $("#edit-type")
const $inputEditValor = $("#edit-valor")
const $inputEditFecha = $("#edit-fecha")
const $inputEditCantidad = $("#edit-cantidad")

/* Selecciones reportes */
const $reporteTotalVentas = $("#reporte-total-ventas")

/* Evento de creacion de una venta */
$formCreate.addEventListener("submit", (evento) => {
  evento.preventDefault();

  const nuevaVenta = {
    id: crypto.randomUUID(),
    type: evento.target[0].value,
    value: Number(evento.target[1].value),
    date: dayjs(evento.target[2].value).format("YYYY-MM-DD"),
    quantity: Number(evento.target[3].value)
  }

  funciones.agregarVenta(nuevaVenta)

  const datos = funciones.obtenerDatos("ventas")
  pintarDatos(datos)
})

$("#button-view-home").addEventListener("click", () => {
  showElement([$sectionViewHome])
  hideElement([$sectionViewVenta, $sectionViewReporte])
})
$("#button-view-venta").addEventListener("click", () => {
  showElement([$sectionViewVenta, $formCreate])
  hideElement([$sectionViewHome, $sectionViewReporte])

  hideElement([$formEdit])
})
$("#button-view-reporte").addEventListener("click", () => {
  showElement([$sectionViewReporte])
  hideElement([$sectionViewHome, $sectionViewVenta])

  actualizarReportes()
})

/* FILTROS */
$selectFilterType.addEventListener("input", (e) => {
  const datos = obtenerDatos("ventas")
  if(e.target.value !== "all") {
    const ventasFiltradas = datos.filter(elem => elem.type === e.target.value)
    pintarDatos(ventasFiltradas)
  } else {
    pintarDatos(datos)
  }
})

/* Funcion que mostrara los datos en pantalla */
function pintarDatos(array) {

  $divListVentas.innerHTML = "";
  for (const venta of array) {
    $divListVentas.innerHTML += `<div class="w-full border border-black my-2">
      <h5>Tipo: ${venta.type}</h5>
      <p>Valor: ${venta.value}</p>
      <p>Valor: ${dayjs(venta.date).format("DD/MM/YYYY")}</p>
      <p>Cantidad: ${venta.quantity}</p>
      <div>
        <button id="${venta.id}" class="button-edit border border-black shadow bg-green-600">Editar</button>
        <button id="${venta.id}" class="button-delete border border-black shadow bg-red-600">Eliminar</button>
      </div>
    </div>`
  }

  agregarEventosEditYDelete()
}

function agregarEventosEditYDelete() {
  const $$arrayButtonsDelete = $$(".button-delete")
  const $$arrayButtonsEdit = $$(".button-edit")

  $$arrayButtonsDelete.forEach(button => {
    button.addEventListener("click", (e) => {
      const nuevoArray = funciones.quitarVenta(e.target.id)
      pintarDatos(nuevoArray)
    })
  })

  $$arrayButtonsEdit.forEach(button => {
    button.addEventListener("click", (e) => {
      hideElement([$sectionViewHome, $sectionViewReporte, $("#form-create")])
      showElement([$sectionViewVenta, $formEdit])

      const datos = funciones.obtenerDatos("ventas")
      const ventaBuscada = datos.find(elem => elem.id === e.target.id)

      $selectEditType.value = ventaBuscada.type
      $inputEditValor.value = ventaBuscada.value
      $inputEditFecha.value = ventaBuscada.date
      $inputEditCantidad.value = ventaBuscada.quantity

      $formEdit.id = ventaBuscada.id
    })
  })
}

$formEdit.addEventListener("submit", (event) => {
  event.preventDefault();

  const datos = funciones.obtenerDatos("ventas")
  const ventaBuscada = datos.find(elem => elem.id === event.target.id)

  // Agregar lo que esta en todos los inputs, a un array. Y luego actualizar el LS
  const nuevosDatos = {  //    '9c34ace3-83d0-482e-ac1b-915cf29cbad1' 
    type: event.target[0].value,
    value: Number(event.target[1].value),
    date: dayjs(event.target[2].value).format("YYYY-MM-DD"),
    quantity: Number(event.target[3].value)
  };

  const datosModificados = funciones.editarVenta(ventaBuscada.id, nuevosDatos)

  pintarDatos(datosModificados);

});

/*Funciones auxiliares o generales */
const showElement = (selectors) => {
  for (const selector of selectors) {
    selector.classList.remove("hidden");
  }
};
const hideElement = (selectors) => {
  for (const selector of selectors) {
    selector.classList.add("hidden");
  }
};
const actualizarReportes = () => {
  const datos = funciones.obtenerDatos("ventas")
  const ventasFerreteria = funciones.filtrarPorTipo("Ferreteria")
  const totalVentasFerreteria = ventasFerreteria.reduce((acc, curr) => acc + curr.value, 0)
  //  const totalVentasFerreteria = funciones.sumarPorTipo("Ferreria")
  //  const totalVentasVerduleria = funciones.sumarPorTipo("Verduleria")
  //  const totalVentasLibreria = funciones.sumarPorTipo("Libreria")
  const totalVentas = datos.reduce((acc, curr) => acc + curr.value, 0)
  $reporteTotalVentas.innerText = `$ ${totalVentas} ${totalVentasFerreteria}`
}

window.onload = () => {
  const datos = funciones.obtenerDatos("ventas");
  pintarDatos(datos);
  actualizarReportes()
} 