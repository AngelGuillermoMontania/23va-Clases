import Task from "./Task"

function ContainerTask({ tasks, setTasks, deleteTask, modifyTask }) {

  return (
    <section>
      {
        tasks.map(t => <Task
            key={t.id}
            id={t.id}
            title={t.title}
            done={t.done}
            setTasks={setTasks}
            deleteTask={deleteTask}
            modifyTask={modifyTask}
          />
        )
      }
    </section>
  )
}

export default ContainerTask