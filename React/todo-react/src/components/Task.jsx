import React from 'react'

function Task({title, done, id, setTasks, deleteTask, modifyTask}) {

  return (
    <div>
      <h1 className={done ? 'bg-gray-400' : 'bg-blue-500'}>{title}</h1>
      <button onClick={() => modifyTask(id)}>{done ? "Cambiar a Incompleta" : "Completar"}</button>
      <button onClick={() => deleteTask(id)}>Delete</button>
    </div>
  )
}

export default Task