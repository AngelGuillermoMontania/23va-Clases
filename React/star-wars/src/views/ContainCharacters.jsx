import axios from "axios"
import { useEffect, useState } from "react"
import Card from "../components/Card"

export default function ContainCharacters() {

  const [characters, setCharacters] = useState([])

  useEffect(() => {
    async function obtenerDatos() {
      try {
        const {data} = await axios("https://starwars-databank-server.vercel.app/api/v1/characters")
        console.log(data.data)
        setCharacters(data.data)
      } catch (error) {
        console.log(error)
      }
    }
    obtenerDatos()
  }, [])

  return (
    <>
      {
        characters.map(elem => <Card 
          key={elem._id} 
          id={elem._id} 
          name={elem.name} 
          image={elem.image}
        />)
      }
    </>
  )
}
