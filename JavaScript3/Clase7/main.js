/* C             R                       U             D */
/* Create        Read                    Update        Delete */
/* POST          GET                     PUT           DELETE*/

/*   Bases de datos relacionales y las BD no relacionales */


/* 

Bases De Datos Relacionales 
PRO:
- Me aseguro de la consistencia de los datos. Es estructurado
- Son bastantes antiguas, con lo cual, hay muchiiiisima muchiiiisima informacion en internet
- No hay otra base de datos relacional que no sea SQL

CONTRAS: 
- Es mas lento en terminos generales.
- Es mas dificil ingresar

Ejemplos: MySQL, SQLite, PostgresSQL, SQLServer.



Bases De Datos NO RELACIONES
PRO:
- Es mas nuevo
- Es mas rapido que las relacionales. 

CONTRAS: 
- No me da seguridad a la hora de la consistencia de los datos.
- Es mas nuevo

Ejemplo: MongoDB

*/


let products = []
const $formCreate = document.querySelector("#form-create")
const $formEdit = document.querySelector("#form-edit")

$formCreate.addEventListener("submit", async (e) => {
  e.preventDefault()

  if(!e.target[0].value || !e.target[1].value || !e.target[2].value) {
    alert("Todos los campos deberian estar completados")
  }

  const name = e.target[0].value
  const stock = Number(e.target[1].value)
  const category = e.target[2].value
  
  // EL PRIMER ARGUMENTO/PARAMETRO ES LA URL O ENDPOINT
  // EL POST EN AXIOS ESPERA COMO SEGUNDO ARGUMENTO EL BODY DE LA PETICION
  // EL POST A DIFERENCIA DEL GET, HABILITA QUE EL TERCER PARAMETRO/ARGUMENTO SEA EL DE CONFIGURACION
  try {
    const { data } = await axios.post("https://67db51111fd9e43fe4743cef.mockapi.io/api/v1/product", {
      name,
      stock,
      category,
    })
    alert("SE AGREGO CORRECTAMENTE")
  } catch (error) {
    console.log(error)
  }

})

$formEdit.addEventListener("submit", async (e) => {
  e.preventDefault()

  if(!e.target[0].value || !e.target[1].value || !e.target[2].value) {
    alert("Todos los campos deberian estar completados")
  }

  const name = e.target[0].value
  const stock = Number(e.target[1].value)
  const category = e.target[2].value
  const id = e.target[3].value
  
  // EL PRIMER ARGUMENTO/PARAMETRO ES LA URL O ENDPOINT
  // EL PUT EN AXIOS ESPERA COMO SEGUNDO ARGUMENTO EL BODY DE LA PETICION
  // EL PUT A DIFERENCIA DEL GET, HABILITA QUE EL TERCER PARAMETRO/ARGUMENTO SEA EL DE CONFIGURACION
  
  try {
    const { data } = await axios.put(`https://67db51111fd9e43fe4743cef.mockapi.io/api/v1/product/${id}`, {
      name,
      stock,
      category,
    })
    alert("SE EDITO CORRECTAMENTE")
  } catch (error) {
    console.log(error)
  }

})


const pintarDatos = (array) => {
  const $div = document.querySelector("#container-products")

  $div.innerHTML = ""
  for (const product of array) {
    $div.innerHTML += `<div>${product.name}
      <button id="${product.id}" class="btn-edit">Editar</button>
      <button id="${product.id}" class="btn-delete">Eliminar</button>
    </div>`
  }

  const $$btnEdits = document.querySelectorAll(".btn-edit")
  const $$btnDelete = document.querySelectorAll(".btn-delete")

  for (const btnEdit of $$btnEdits) {
    btnEdit.addEventListener("click", async () => {

      const {data} = await axios(`https://67db51111fd9e43fe4743cef.mockapi.io/api/v1/product/${btnEdit.id}`)

      document.querySelector(".btn-editForm").value = data.id
      document.querySelector("#input-nombre").value = data.name
      document.querySelector("#input-stock").value = data.stock
      document.querySelector("#input-categoria").value = data.category
    })
  }

  for (const btnDelete of $$btnDelete) {
    btnDelete.addEventListener("click", async () => {
      try {
        const {data} = await axios.delete(`https://67db51111fd9e43fe4743cef.mockapi.io/api/v1/product/${btnDelete.id}`)
        products = products.filter(product => product.id != btnDelete.id)
        pintarDatos(products)
      } catch (error) {
        console.log(error)
      }
    })
  }

}

window.onload = async () => {
  try {
    const { data } = await axios("https://67db51111fd9e43fe4743cef.mockapi.io/api/v1/product")
    products = data
    pintarDatos(products)
  } catch (error) {
    console.log(error)
  }
}