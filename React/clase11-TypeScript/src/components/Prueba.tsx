import { type JSX } from 'react'

interface Props {
  nombre: string,
}

export default function Prueba({nombre}: Props): JSX.Element {
  return (
    <>
      <div>HOLAAAAAAAAAAAAAAAAAAA </div>
      <div>{ nombre }</div>
    </>
  )
}
