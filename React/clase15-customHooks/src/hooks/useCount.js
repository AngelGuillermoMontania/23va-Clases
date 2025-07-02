import { useState } from "react";


export default function useCount() {

  const [count, setCount] = useState(1)

  function sumarUno() {
    setCount(count + 1)
  }

  function restarUno() {
    setCount(count - 1)
  }

  return {
    count,
    sumarUno,
    restarUno
  }

}