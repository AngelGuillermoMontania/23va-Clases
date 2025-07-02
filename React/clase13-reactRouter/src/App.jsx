import { Link } from "react-router"

function App() {

  return (
    <>
      <h1>SOY EL APP</h1>
      <div>
        <Link to="/productos">Ir a PRODUCTOS</Link>
      </div>
      {/* <a href="/detalle">Ir al detalle ETIQUETA A</a>  PROHIBIDA   */}
    </>
  )
}

export default App
