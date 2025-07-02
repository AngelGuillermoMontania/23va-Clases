import { createContext, useEffect, useState } from "react";

export const CountContext = createContext(); // Crear el contexto y lo guardamos en la variable CountContext

const CountContextProvider = ({ children }) => { // Creamos el componente que proveera a la aplicacion de la informacion

  const [dato, setDato] = useState({
    nombre: "Chimichurri",
    count: 1
  }) // Estado a trabajar
  
  function sumar() {
    setDato({ ...dato, count: dato.count + 1})
  }

  function restar() {
    setDato({ ...dato, count: dato.count - 1})
  }

  function reset() {
    setDato({ ...dato, count: 0})
  }

  const data = {   // El objeto que voy a dar a conocer a la aplicacion
    count,
    sumar,
    restar,
    reset,
  }

  return <CountContext.Provider value={data}>{children}</CountContext.Provider>
}

export default CountContextProvider;  // Exportamos el componente CountContextProvider