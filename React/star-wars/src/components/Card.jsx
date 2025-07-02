import { useNavigate } from 'react-router'

export default function Card({id, name, image}) {

  const navigate = useNavigate()

  return (
    <div onClick={() => navigate(`/characters/${id}`)} style={{margin: "50px 0", border: "1px black solid"}}>
      <img src={image} style={{width: '200px'}} />
      <p>{name}</p>
    </div>
  )
}
