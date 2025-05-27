import { useEffect } from "react"

export default function Mounted() {

  useEffect(() => {
    console.log("SE MONTO EL COMPONENTE")
  }, [])
  /* Para trabajar el Mounted, el useEffect se escribe con las dependencias */

  return (
    <h1>Mounted</h1>
  )
}
