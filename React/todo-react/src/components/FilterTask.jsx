import { useState } from "react"

function FilterTask({ filterTasks }) {

  const [selected, setSelected] = useState("all")

  function onFilterSelected(e) {
    setSelected(e.target.value)
    filterTasks(e.target.value)
  }

  return (
    <div>
      <select value={selected} onChange={onFilterSelected}>
        <option value="all" defaultValue>All</option>
        <option value="true">Completas</option>
        <option value="false">Incompletas</option>
      </select>
    </div>
  )
}

export default FilterTask