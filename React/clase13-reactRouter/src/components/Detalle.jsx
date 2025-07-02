import { useEffect, useState } from 'react'
import { Link } from 'react-router'
import { useParams } from 'react-router'

export default function Detalle() {

  const params = useParams()
  const [product, setProduct] = useState({})

  useEffect(() => {
    // function obtenerUnSoloProducto(id) {}
    // obtenerUnSoloProducto(params.id)\
    // guardar en el estado product el producto obtenido
  }, [])

  return (
    <>
      <h1>Soy el componente DETALLE. Recibi el id {params.idProduct}</h1>
      <div>
        <Link to="/detalle/compra">Ir A Comprar</Link>
      </div>
      <Link to="/">Volver al HOME</Link>
    </>
  )
}