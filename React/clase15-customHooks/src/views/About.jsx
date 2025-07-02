import useCount from "../hooks/useCount"

export default function About() {

  const {count} = useCount()

  return (
    <div>
      <h1>ABOUT</h1>
      <h1>Count: {count}</h1>
    </div>
  )
}
