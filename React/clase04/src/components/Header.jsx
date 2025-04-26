export default function Header({ categorias }) {
  return (
    <div>
      <button>{categorias[0].nombre}</button>
      <button>{categorias[1].nombre}</button>
    </div>
  );
}

/* 

{
  categorias: [
    { nombre: "chimichurri", id: 1 },
    { nombre: "Pepe", id: 2 },
  ],
  cosito: "32"
}

*/
