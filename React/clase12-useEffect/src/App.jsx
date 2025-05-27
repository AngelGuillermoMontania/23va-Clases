import { useState } from "react"
import Mounted from "./components/Mounted"
import Unmounted from "./components/Unmounted"
import Update from "./components/Update"

function App() {

  const [habilita, setHabilita] = useState(false)

  return (
    <>
    <button onClick={() => setHabilita(!habilita)}>{habilita ? "Deshabilitar" : "Habilitar"}</button>
    {/* --- CICLO DE VIDA  ===>  MOUNTED */}
      {/* {habilita ? <Mounted /> : <h5>Soy el H5 de app</h5>} */}
      
    {/* --- CICLO DE VIDA  ===>  UNMOUNTED */}
      {/* {habilita ? <Unmounted /> : <h5>Soy el H5 de app</h5>} */}

    {/* --- CICLO DE VIDA  ===>  UPDATE/RENDER */}
      <Update />
    </>
  )
}

export default App
