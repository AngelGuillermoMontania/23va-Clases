import { useState } from "react"
import axios from "axios"

function useCharacter() {

  const [listCharacters, setListCharacters] = useState([]) 
  const [character, setCharacter] = useState({})
  const [page, setPage] = useState(1)
  const [totalPages, setTotalPages] = useState(0)

  async function getCharacters(filterStatus) {
    try {
      const { data } = await axios(`https://rickandmortyapi.com/api/character?page=${page}&status=${filterStatus ? filterStatus : ""}`)
      setListCharacters(data.results)
      setTotalPages(data.info.pages)
    } catch (e) {
      console.log(e)
    }
  }

  async function getCharacter(id) {
    try {
      const { data } = await axios(`https://rickandmortyapi.com/api/character/${id}`)
      setCharacter(data)
    } catch (e) {
      console.log(e)
    }
  }

  function changePage(numero) {
    setPage(numero)
  }

  return {
    listCharacters,
    getCharacters,
    changePage,
    page,
    totalPages,
    getCharacter,
    character,
  }
}

export default useCharacter