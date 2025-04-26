function FinPagina() {

  const nombres = [{id: 1, nombre: "Guille"}, {id: 2, nombre: "Nadia"}, {id: 3, nombre: "Noe"}, {id: 4,nombre:"Sara"}]

  return <footer>
    {
      nombres.map(x => <div key={x.id}>
        <section></section>
        <h1>{x.nombre}</h1>
      </div>)
    }
  </footer>
}

export default FinPagina


/* No puedo for of por que ya no contamos con innerHTML y el for of solo recorre */
/* React solicita metodos que retorne un nuevo array, es decir, no destructivo. */
/* 
filter
map
*/
