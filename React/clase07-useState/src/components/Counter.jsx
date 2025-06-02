import { useState } from "react"

export default function Counter() {

  const [count, setCount] = useState(1)

  /* 
  setCount(count + 1)
  setCount(2)


  setCount(count++)
  setCount(count = count + 1)
  setCount(error no puedo modificar el estado asi)
  */

  function sumar() {
    if(count < 10) {
      setCount(count + 1)
    }
  }

  function restar() {
    setCount(count - 1)
  }

  return (
    <div>
      <div>
        <button onClick={sumar}>Sumar 1</button>
        <button onClick={restar}>Restar 1</button>
      </div>
      <h1>Valor Count: {count} </h1>
    </div>
  )
}