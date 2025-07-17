import axios from "axios"
import { useState } from "react"

function useDog() {

  const [razas, setRazas] = useState([])
  const [imagenesRaza, setImagenesRaza] = useState([])
  const [razaSeleccionada, setRazaSeleccionada] = useState("1")

  async function obtenerRazasMascotas() {
    const apiKey = import.meta.env.VITE_API_KEY_DOG;
    const url = `https://api.thedogapi.com/v1/breeds?api_key=${apiKey}`
    try {
      const {data} = await axios(url)
      setRazas(data)
    } catch (error) {
      console.log(error)
    }
  }

   async function obtenerListaImagenesRaza() {
    const apiKey = import.meta.env.VITE_API_KEY_DOG;
    const url = `https://api.thedogapi.com/v1/images/search?breed_ids=${razaSeleccionada}&page=1&limit=20&api_key=${apiKey}`
    
    try {
      const {data} = await axios(url)
      console.log(data)
      setImagenesRaza(data)
    } catch (error) {
      console.log(error)
    }
  }

  function changeRazaSeleccionada(valor) {
    setRazaSeleccionada(valor)
  }

  const data = {
    obtenerRazasMascotas,
    obtenerListaImagenesRaza,
    imagenesRaza, 
    razaSeleccionada,
    razas,
    changeRazaSeleccionada
  }

  return data
}

export default useDog