import { doc, getDoc } from "firebase/firestore";
import { useEffect, useState } from "react"
import { useParams } from "react-router"
import db from "../../fireStoreConfig";
import Swal from "sweetalert2";

export default function DetailProduct() {

  const { idProduct } = useParams()
  const [product, setProduct] = useState({})
  const [cantidadCarrito, setCantidadCarrito] = useState(1)

  useEffect(() => {
    async function obtenerProducto() {
      try {
        const documentoRef = doc(db, "Calzado", idProduct);
        const docCalzado = await getDoc(documentoRef);

        if (docCalzado.exists()) {
          setProduct(docCalzado.data())
        } else {
          Swal.fire({
            title: "No existe el calzado",
            icon: "error",
            timer: 3000,
            showCancelButton: false,
            showConfirmButton: false,
          });
        }
      } catch (error) {
        console.log(error)
      }
    }
    obtenerProducto()
  }, [])

  return (
    <h1>
      {product.modelo}
    </h1>
  )
}
