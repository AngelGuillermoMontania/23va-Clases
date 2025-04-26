import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Coso from "./components/Coso"

function App() {
  return (
    <div>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
      <Coso />
    </div>
  )
}

export default App



/* COMPONENTE
- Parte de codigo
- Conjunto de codigo
- Codigo reutilizable
- Un coso que compone a otro coso
- Es parte de otro codigo
- Una pieza o porcion de codigo de algo mas grande


- Porcion, pieza, parte o conjunto de codigo que puede reutilizarse y componer a otra
porcion de codigo y ademas tiene una sola tarea.


*/