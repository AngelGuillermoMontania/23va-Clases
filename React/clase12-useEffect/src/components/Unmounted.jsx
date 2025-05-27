import { useEffect } from "react"

export default function Unmounted() {

  useEffect(() => {
    return () => {
      console.log("UNMOUNTED")
    }
  }, [])
  /* El desmontaje (Unmounted) se ejecutara en la funcion de retorno del useEffect */

  return (
    <h1>Unmounted</h1>
  )
}
