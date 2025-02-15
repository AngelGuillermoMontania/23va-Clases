let datosTodasLasVentas = []

function leerLocalStorage(key) {
  const datos = JSON.parse(localStorage.getItem(key))
  return datos;
}

function guardarLocalStorage(key, data) {
  localStorage.setItem(key, JSON.stringify(data))
}

function agregarVenta(objetoNuevaVenta) {
  datosTodasLasVentas.push(objetoNuevaVenta)
  guardarLocalStorage("ventas", datosTodasLasVentas)
}

export default {
  leerLocalStorage,
  guardarLocalStorage,
  agregarVenta
}