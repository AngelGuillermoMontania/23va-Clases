import axios from "axios"
import { useEffect, useState } from "react"
import { useParams } from "react-router"

const ListPet = () => {

  const { type } = useParams()

  const [razas, setRazas] = useState([])
  const [imagenesRaza, setImagenesRaza] = useState([])
  const [razaSeleccionada, setRazaSeleccionada] = useState("abys")
  
  useEffect(() => {
    async function obtenerRazasMascotas() {
      const typeFormat = type.toLowerCase()
      const apiKey = typeFormat === "cat" ? import.meta.env.VITE_API_KEY_CAT : import.meta.env.VITE_API_KEY_DOG;
      const url = `https://api.the${typeFormat}api.com/v1/breeds?api_key=${apiKey}`
      try {
        const {data} = await axios(url)
        setRazas(data)
      } catch (error) {
        console.log(error)
      }
    }
    async function obtenerListaMascotas() {
      const typeFormat = type.toLowerCase()
      const apiKey = typeFormat === "cat" ? import.meta.env.VITE_API_KEY_CAT : import.meta.env.VITE_API_KEY_DOG;
      const url = `https://api.the${typeFormat}api.com/v1/images/search?breed_ids=${razaSeleccionada}&page=1&limit=20&api_key=${apiKey}`
      
      try {
        const {data} = await axios(url)
        console.log(data)
        setImagenesRaza(data)
      } catch (error) {
        console.log(error)
      }
    }
    obtenerRazasMascotas()
    obtenerListaMascotas()
  }, [razaSeleccionada])

  return (
    <div>
      <select onChange={(e) => {
        setRazaSeleccionada(e.target.value)
      }}>
        {
          razas.map(elem => <option key={elem.id} value={elem.id}>{elem.name}</option>)
        }
      </select>
      {
        imagenesRaza.map(elem => <img key={elem.id} width="150px" src={elem.url}></img>)
      }
    </div>
  )
}

export default ListPet