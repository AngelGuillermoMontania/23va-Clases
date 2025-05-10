import { useState } from "react"

import Header from "./components/Header"
import CreateTask from "./components/CreateTask"
import FilterTask from "./components/FilterTask"
import ContainerTask from "./components/ContainerTask"

function App() {

  const [tasks, setTasks] = useState(JSON.parse(localStorage.getItem("tasks")) || [])

  // {
  //   id: 1, 
  //   title: "cosita", 
  //   done: false 
  // },
  // {
  //   id: 2, 
  //   title: "chimichurri", 
  //   done: true 
  // }

  function deleteTask(id) {
    const taskFilters = tasks.filter(t => t.id != id)
    localStorage.setItem("tasks", taskFilters)
    setTasks(taskFilters)
  }

  function addTask(title) {
    const nuevaTarea = {id: crypto.randomUUID(), title: title, done: false}
    const nuevoArray = [...tasks, nuevaTarea];
    localStorage.setItem("tasks", JSON.stringify(nuevoArray))
    setTasks(nuevoArray)
  }

  function filterTasks(optionSelect) {
    const allTasks = JSON.parse(localStorage.getItem("tasks"))
    if(optionSelect == "all") {
      setTasks(allTasks)
    } else {
      const arrayFiltrado = allTasks.filter(t => String(t.done) == optionSelect)
      setTasks(arrayFiltrado)
    }
  }

  function modifyTask(id) {
    const allTasks = JSON.parse(localStorage.getItem("tasks"))
    const allTasksModificado = allTasks.map(elem => {
      if(elem.id == id) {
        return {
          ...elem,
          done: !elem.done
        }
      } else {
        return elem
      }
    });
    localStorage.setItem("tasks", JSON.stringify(allTasksModificado))
    setTasks(allTasksModificado)
  }

  return (
    <>
      <Header />
      <CreateTask addTask={addTask} />
      <FilterTask filterTasks={filterTasks} />
      <ContainerTask tasks={tasks} deleteTask={deleteTask} modifyTask={modifyTask} />
    </>
  )
}

export default App


/* 
{
  id: 1, 
  title: "cosita", 
  done: false 
}

localStorage lo voy a guardar como tasks

*/