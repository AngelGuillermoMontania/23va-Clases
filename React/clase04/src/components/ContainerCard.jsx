import Card from "./Card";

const personas = [
  { nombre: "Guille", id: 1, apellido: "Montaña" },
  { nombre: "Nadia", id: 2 },
  { nombre: "Ro", id: 3 },
];

function ContainerCard(props) {
  return (
    <section>
      <select>
        {props.categorias.map((ctga) => (
          <option key={ctga.id} value={ctga.id}>
            {ctga.nombre}
          </option>
        ))}
      </select>
      {personas.map((p) => (
        <Card key={p.id} nombre={p.nombre} id={p.id} />
      ))}
    </section>
  );
}

export default ContainerCard;

/* 
{
  categorias: [
    { nombre: "chimichurri", id: 1 },
    { nombre: "Pepe", id: 2 },
  ],
} 
*/
