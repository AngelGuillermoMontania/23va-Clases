function obtenerDatos(key) {
  const datos = JSON.parse(localStorage.getItem(key))
  return datos ? datos : [];
}

function guardarDatos(key, data) {
  localStorage.setItem(key, JSON.stringify(data))
}

function agregarVenta(objetoNuevaVenta) {
  const datos = obtenerDatos("ventas")
  guardarDatos("ventas", [...datos, objetoNuevaVenta])
}

function filtrarPorTipo(tipo) {
  const datos = obtenerDatos("ventas")
  return datos.filter(elem => elem.type === tipo)
}

function quitarVenta(idVenta) {
  const datos = obtenerDatos("ventas")
  const nuevoArray = datos.filter(venta => venta.id !== idVenta)

  guardarDatos("ventas", nuevoArray)

  return nuevoArray
}

function editarVenta(idVenta, nuevosDatos) {
  const datos = obtenerDatos("ventas")
  const indiceBuscado = datos.findIndex((venta) => venta.id == idVenta)

  datos.splice(indiceBuscado, 1, {...nuevosDatos, id: idVenta});

  guardarDatos("ventas", datos)

  return datos
}

export default {
  obtenerDatos,
  guardarDatos,
  agregarVenta,
  filtrarPorTipo,
  quitarVenta,
  editarVenta
}