import { Grid } from "@mui/material"
import { useEffect, useState } from "react"
import Product from "./Product"
import db from "../../fireStoreConfig.js"
import { collection, getDocs } from "firebase/firestore"

export default function ContainProduct() {

  const [products, setProducts] = useState([])

  // nombre Coleccion: Comidas
  // const [comidas, setComidas] = useState([])
  useEffect(() => {
    const getCalzados = async () => {
      try {
        const calzadosRef = collection(db, 'Calzado');
        const snapshot = await getDocs(calzadosRef);
        let aux = [];
        snapshot.forEach(doc => {
          aux.push({id: doc.id, ...doc.data()});
        });
        setProducts(aux)
      } catch (error) {
        console.log(error)
      }
    }
    getCalzados()
  }, [])
  
  return <Grid
    container
    direction="row"
    spacing={3}
    sx={{
      mt: "2rem",
      justifyContent: "center",
      alignItems: "center",
    }}
  >
    {
      products.map(({id, img, categoria, descripcion, marca, modelo, precio, stock}) => <Product 
        key={id} 
        img={img} 
        id={id} 
        categoria={categoria} 
        descripcion={descripcion}
        marca={marca}
        modelo={modelo}
        precio={precio}
        stock={stock}
      />)
    }
  </Grid>
}