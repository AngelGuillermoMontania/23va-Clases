import { useEffect } from "react"
import { useParams } from "react-router"
import useCalzado from "../hooks/useCalzado"

export default function DetailProduct() {

  const { idProduct } = useParams()
  const { obtenerCalzado, oneCalzado } = useCalzado()

  useEffect(() => {
    obtenerCalzado(idProduct)
  }, [])

  return (
    <h1>
      {oneCalzado.modelo}
    </h1>
  )
}