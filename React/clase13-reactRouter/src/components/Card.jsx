import React from 'react'
import { useNavigate } from 'react-router'

export default function Card({title, id}) {

  const navigate = useNavigate()

  return (
    <div style={{
      margin: "5px",
      padding: "10px",
      border: "white 1px solid"
    }}>
      <h1>{title}</h1>
      <button onClick={() => navigate(`/detalle/${id}`)}>Ir al detalle</button>
    </div>
  )
}
