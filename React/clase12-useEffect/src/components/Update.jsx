import { useEffect, useState } from "react"

export default function Update() {

  const [count, setCount] = useState(1)

  // const [order, setOrder] = useState("Mas relevantes")
  useEffect(() => {
    //   axios(`http:productos?orderBy=${order}`)
  }, [order])

  return (
    <div>
      <button onClick={() => setCount(count + 1)}>Sumar 1</button>
      <h1>{count}</h1>
    </div>
  )
}
