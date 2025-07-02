import axios from "axios"
import { useEffect, useState } from "react"
import { useParams } from "react-router"

export default function DetailCharacter() {

  const { idCharacter } = useParams()
  const [character, setCharacter] = useState({})

  useEffect(() => {
    async function obtenerPersonaje() {
      try {
        const {data} = await axios(`https://starwars-databank-server.vercel.app/api/v1/characters/${idCharacter}`)
        setCharacter(data)
      } catch (error) {
        console.log(error)
      }
    }
    obtenerPersonaje()
  }, [])

  return (
    <>
      <h1>{ character.name }</h1>
      <p>{character.description}</p>
    </>
  )
}

// https://starwars-databank-server.vercel.app/api/v1/characters/id