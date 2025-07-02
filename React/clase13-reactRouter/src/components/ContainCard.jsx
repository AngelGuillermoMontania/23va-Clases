import Card from "./Card"

const productos = [{
  id: 1,
  title: "Vaso",
}, {
  id: 2,
  title: "Notebook",
}, {
  id: 3,
  title: "Mate",
}]

export default function ContainCard() {


  return (
    <div>
      {
        productos.map(pr => <Card key={pr.id} title={pr.title} id={pr.id} />)
      }
    </div>
  )
}
