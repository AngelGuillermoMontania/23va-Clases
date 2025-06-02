import { useState } from "react"

export default function CreateProduct() {

  const [product, setProduct] = useState({
    nombre: "",
    stock: 0,
    categorias: [],
    descripcion: "",
  })

  function onInput(e) {
    const sonValidosLosDatos = validate(e.target.name, e.target.value)
    if(sonValidosLosDatos) {
      setProduct({...product, [e.target.name]: e.target.value})
    } else {
      alert("LOS CAMPOS NO SON CORRECTOS")
    }
  }
  
  function validate(name, value) {
    if(name === "nombre") {
      // El input no debe recibir numeros, deberia ser menor a 30 caracteres y mayor a 1
      // if (value.length > 30 || value.length <= 1) {
      //   return false
      // }
    }
    if(name === "stock") {
      // if(value < 1) {
      //    return false
      // }
    }
    // Si esta bien.... retorna true
    return true
  }

  return (
    <form>
      <label>Hola</label>
      <input type="text" placeholder="Nombre" name="nombre" value={product.nombre} onChange={onInput} />
      <input type="number" placeholder="Stock" name="stock" value={product.stock} onChange={onInput} />
      <textarea placeholder="descripcion" name="descripcion" value={product.descripcion} onChange={onInput} />
      <button type="submit">Crear</button>
    </form>
  )
}

/* nombre */
/* stock */
/* categorias */
/* sub category */
/* descripcion */
/* etiquetas */