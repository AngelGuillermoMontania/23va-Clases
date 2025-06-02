import { useEffect, useState } from "react"
import ContainCharacter from "./ContainCharacter"
import FilterCharacter from "./FilterCharacter"
import axios from "axios"

export default function Principal() {

  const [allCharacter, setAllCharacter] = useState([])
  const [page, setPage] = useState(1)
  const [order, setOrder] = useState("")

  useEffect(() => {
    const getCharacters = async () => {
      try {
        const {data} = await axios(`https://api.potterdb.com/v1/characters?page[number]=${page}&sort=${order}name`)
        setAllCharacter(data.data)
      } catch (error) {
        console.log(error)
      }
    }
    getCharacters()
  }, [page, order])

  function nextPage() {
    if(page + 1 < 10) {
      setPage(page + 1)
    }
  }

  function previousPage() {
    if(page > 1) {
      setPage(page - 1)
    }
  }

  function alterarOrden(valor) {
    setOrder(valor)
  }

  return (
    <>
      <FilterCharacter alterarOrden={alterarOrden} />
      <ContainCharacter allCharacter={allCharacter} />
      <button onClick={previousPage}>Ir a la pagina anterior</button>
      <button onClick={nextPage}>Ir a la pagina siguiente</button>
    </>
  )
}