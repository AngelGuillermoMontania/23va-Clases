import axios from "axios";
import { useState } from "react";

export default function useCharacter() {

  const [listCharacters, setListCharacters] = useState([])
  const [character, setCharacter] = useState({})

  async function getAllCharacters() {
    try {
      const { data } = await axios("https://rickandmortyapi.com/api/character")
      setListCharacters(data.results)
    } catch (error) {
      console.log(error)
    }
  }

  async function getOneCharacter(id) {
    try {
      const { data } = await axios(`https://rickandmortyapi.com/api/character/${id}`)
      setListCharacters(data.results)
    } catch (error) {
      console.log(error)
    }
  }

  return {
    listCharacters,
    character,
    getAllCharacters,
    getOneCharacter
  }

}