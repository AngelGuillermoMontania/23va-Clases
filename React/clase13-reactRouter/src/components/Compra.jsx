import React from 'react'
import { useNavigate } from 'react-router'

export default function Compra() {

  const navigate = useNavigate()

  function clickDetalle() {
    navigate("/detalle")
  }

  return (
    <>
      <h1>Soy el componente Compra, junto a detalle</h1>
      <button onClick={clickDetalle}>Ir al detalle</button>
    </>
  )
}
