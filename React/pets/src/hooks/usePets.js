import { useState } from "react"

function usePets() {

  const [pets, setPets] = useState()

  const data = {
    pets
  }

  return data
}

export default usePets