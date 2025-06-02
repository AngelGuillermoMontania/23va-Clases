export default function FilterCharacter({alterarOrden}) {

  return (
    <div>
      <select onChange={(e) => alterarOrden(e.target.value)}>
        <option selected value={""}>A-Z</option>
        <option value={"-"}>Z-A</option>
      </select>
    </div>
  )
}
