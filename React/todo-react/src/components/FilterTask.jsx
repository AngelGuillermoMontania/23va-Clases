import { useState } from "react"

function FilterTask({ filterTasks, selected }) {

  return (
    <div>
      <select value={selected} onChange={(e) => filterTasks(e.target.value)}>
        <option value="all" defaultValue>All</option>
        <option value="true">Completas</option>
        <option value="false">Incompletas</option>
      </select>
    </div>
  )
}

export default FilterTask