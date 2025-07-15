import { useState } from "react"

function useLocalStorage() {

  const [ls, setLs] = useState([])

  function set(tipo, datos) {
    return localStorage.setItem(tipo, JSON.stringify(datos))
  }

  function get(tipo) {
    const datosObtenidosDeLs = JSON.parse(localStorage.getItem(tipo))
    setLs(datosObtenidosDeLs)
    return datosObtenidosDeLs
  }

  return {
    set,
    get,
    ls
  }
}

export default useLocalStorage
