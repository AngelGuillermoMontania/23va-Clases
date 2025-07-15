import { Grid } from "@mui/material"
import { useEffect } from "react"
import Product from "../components/Product"
import { useParams } from "react-router"
import useCalzado from "../hooks/useCalzado.js"

export default function ContainProduct() {

  const { categoria } = useParams()   //   home ==> undefined       no es home ===> "zapatos"
  const { getCalzados, listCalzado } = useCalzado()

  useEffect(() => {
    getCalzados(categoria)
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
      listCalzado.map(({id, img, categoria, descripcion, marca, modelo, precio, stock}) => <Product 
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