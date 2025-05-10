import { useState } from "react"

function CreateTask({addTask}) {

  const [titleTask, setTitleTask] = useState("")

  function addNewTask(e) {
    e.preventDefault()
    addTask(titleTask)
    setTitleTask("")
  }

  return (
    <form onSubmit={addNewTask} className="flex justify-around align-middle mx-4 border border-black">
      <input type="text" placeholder="Escriba su tarea..." value={titleTask} onChange={(e) => setTitleTask(e.target.value)}>
      </input>
      <button style={{border: "1px solid black", padding: "2px 4px"}} type="submit">CREAR</button>
    </form>
  )
}

export default CreateTask