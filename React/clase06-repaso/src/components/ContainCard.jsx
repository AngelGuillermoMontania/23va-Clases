import style from "./containCard.module.css"

function ContainCard ({ personas }) {

  return <>
    {
      personas.length == 1 ? <>
        {
          <h1>{personas[0].nombre}</h1>
        }
      </> :
      personas.map(elem => <section key={elem.id}>
          <div>
            <h1 className={style.title}>{elem.nombre}</h1>
            <h3>{elem.apellido ? elem.apellido : "Sin Apellido"}</h3>
          </div>
        </section>
      )
    }
  </>
}

export default ContainCard