import { Link } from "react-router"
import useCount from "../hooks/useCount"
import useCharacter from "../hooks/useCharacter"
import { useEffect } from "react"

export default function Home() {

  const { count, sumarUno, restarUno } = useCount()
  const { listCharacters, getAllCharacters} = useCharacter()

  useEffect(() => {
    getAllCharacters()
  }, [])

  return (
    <div>
      <h1>HOME</h1>
      <h1>COUNT: {count}</h1>
      <div>
        <button onClick={sumarUno}>Sumar 1</button>
        <button onClick={restarUno}>Restar 1</button>
      </div>
      <Link to="/about">Ir a About</Link>
      {
        listCharacters.map(e => <p>{e.name}</p>)
      }
    </div>
  )
}



function devolverEdad() {
  return 18
}

let a = devolverEdad() 

a = a + 2
console.log(a)
let b = devolverEdad()
console.log(b)