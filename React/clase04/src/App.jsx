import ContainerCard from "./components/ContainerCard";
import Header from "./components/Header";

const categorias = [
  { nombre: "chimichurri", id: 1 },
  { nombre: "Pepe", id: 2 },
];

function App() {
  return (
    <>
      <Header categorias={categorias} cosito="32" />
      <ContainerCard categorias={categorias} />
    </>
  );
}

export default App;
