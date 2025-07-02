import { Chip, Divider, Grid, TextField } from "@mui/material"
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

import { useContext } from "react"
import { CartContext } from "../context/CartContext"
import { useNavigate } from "react-router";

export default function Cart() {

  const { cart, setCantidadInProduct, eliminarProductInCartXid, valorTotalInCart, valorTotalProductInCartxID } = useContext(CartContext)
  const navigate = useNavigate()
 
  function controladorSetContadorInProduct(id, e, stock) {
    console.log("STOCK ==>", stock)
    if(e.target.value > 0 && e.target.value <= stock) {
      setCantidadInProduct(id, Number(e.target.value))
    }
  }

  return (
    <>
      <Grid
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
          cart.map(productInCart => 
          <Grid key={productInCart.id}>
            <Card sx={{ maxWidth: 200 }}>
              <CardMedia
                component="img"
                alt="green iguana"
                height="150"
                image={productInCart.img}
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {productInCart.marca} - {productInCart.modelo}
                </Typography>
                <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                  {productInCart.descripcion}
                </Typography>
                <Divider />
                <Grid 
                  direction="column"
                  spacing={1}
                  sx={{
                    mt: "2rem",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <Grid>
                    <TextField type="number" value={productInCart.cantidad} onChange={(e) => controladorSetContadorInProduct(productInCart.id, e, productInCart.stock)} defaultValue={productInCart.cantidad} label="Cantidad en carrito" variant="outlined" />
                  </Grid>
                  <Grid>
                    <Button size="small" variant="contained" onClick={() => eliminarProductInCartXid(productInCart.id)}>Eliminar Del Carrito</Button>
                  </Grid>
                  <Grid>
                    <Typography variant="body1">$ {valorTotalProductInCartxID(productInCart.id)}</Typography>
                  </Grid>
                </Grid>
              </CardContent>
              <CardActions>
                <Button size="medium" onClick={() => navigate(`/detail/${productInCart.id}`)}>Ver Detalle</Button>
                {/* <Button size="large" onClick={() => cartContext.addToCart({id, img, categoria, descripcion, marca, modelo, precio, stock}, 1)}>Agregar al carrito</Button> */}
              </CardActions>
            </Card>
          </Grid>)
        }
      </Grid>
      <Grid container>
        <Typography variant="h4">Valor Total: {valorTotalInCart()}</Typography>
      </Grid>
    </>
  )
}
