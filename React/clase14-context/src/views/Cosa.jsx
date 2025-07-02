import { useState, useContext } from 'react'
import { CountContext } from '../context/CountContext'

export default function Cosa() {

  const contextoDelCount = useContext(CountContext)

  return (
    <div>
      <h1>{contextoDelCount.count}</h1>
    </div>
  )
}
