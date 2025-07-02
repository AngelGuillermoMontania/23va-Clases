import { useNavigate } from "react-router"

export default function Home() {

  const navigate = useNavigate()

  return (
    <div>
      <button onClick={() => navigate("/characters")}>Ir a ver personajes</button>
    </div>
  )
}
