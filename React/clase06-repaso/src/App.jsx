import Header from "./components/Header"
import ContainCard from "./components/ContainCard"
import "./App.css"

function App() {

  const personas = [ {nombre: "Guille", apellido: "Montaña", id: 1}, {nombre: "Violeta", id: 2} ]

  return (
    <>
      <Header />
      <ContainCard personas={personas} />
    </>
  )
}

export default App
