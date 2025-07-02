import { Grid } from "@mui/material"
import { useEffect, useState } from "react"
import Product from "../components/Product"
import db from "../../fireStoreConfig.js"
import { collection, getDocs, query, where } from "firebase/firestore"
import { useParams } from "react-router"

export default function ContainProduct() {

  const [products, setProducts] = useState([])
  const { categoria } = useParams()

  useEffect(() => {
    const getCalzados = async () => {
      try {
        const calzadosRef = collection(db, 'Calzado');
        const snapshot = await getDocs(calzadosRef);
        let aux = [];
        snapshot.forEach(doc => {
          aux.push({id: doc.id, ...doc.data()});
        });
        console.log(aux)
        setProducts(aux)
      } catch (error) {
        console.log(error)
      }
    }
    const getCalzadosByCategory = async () => {
      try {
        const q = query(collection(db, "Calzado"), where("categoria", "==", categoria));
  
        const querySnapshot = await getDocs(q);
        let aux = [];
        querySnapshot.forEach((doc) => {
          aux.push({id: doc.id, ...doc.data()})
        });
        setProducts(aux)
      } catch (error) {
        console.log(error)
      }
    }
    if(categoria) {
      getCalzadosByCategory()
    } else {
      getCalzados()
    }
  }, [categoria])
  
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