import { useState, useContext, useEffect } from 'react'
import { Link } from 'react-router'
import { CountContext } from '../context/CountContext'

export default function Home() {

  const contextoDelCount = useContext(CountContext)

  return (
    <div>
      <h1>{contextoDelCount.count}</h1>
      <button onClick={contextoDelCount.sumar}>SUMAR 1</button>
      <button onClick={contextoDelCount.reset}>RESET</button>
      <div>
        <Link to="/cosa">Ir a view COSA</Link>
      </div>
    </div>
  )
}



function devolverNum4() {
  return 4
}

let num1 = devolverNum4()
console.log(num1)   // 4

num1 = num1 + 1
console.log(num1)   // 5

let num2 = devolverNum4()
console.log(num2)   // 4