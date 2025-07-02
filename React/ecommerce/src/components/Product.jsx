import { 
  Button, 
  CardMedia, 
  CardContent, 
  CardActions, 
  Card, 
  Typography, 
  Grid,
  Box,
  IconButton
} from '@mui/material';

import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";

import { useNavigate } from 'react-router';
import { useContext } from 'react';
import { CartContext } from '../context/CartContext';
import { FavoriteContext } from '../context/FavoritesContext';

export default function Product({id, img, categoria, descripcion, marca, modelo, precio, stock}) {
  
  const navigate = useNavigate()
  const cartContext = useContext(CartContext)
  const {toogleFavorite, existInFavorite} = useContext(FavoriteContext)
  
  return (
    <Grid>
      <Card sx={{ maxWidth: 345 }}>
        <CardMedia
          component="img"
          alt="green iguana"
          height="200"
          image={img}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {marca} - {modelo}
          </Typography>
          <Typography variant="body2" sx={{ color: 'text.secondary' }}>
            {descripcion}
          </Typography>
          <Typography variant="body2" sx={{ color: 'text.secondary' }}>
            Precio: ${precio}
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="medium" onClick={() => navigate(`/detail/${id}`)}>Ver Detalle</Button>
          <Button size="large" onClick={() => cartContext.addToCart({id, img, categoria, descripcion, marca, modelo, precio, stock}, 1)}>Agregar al carrito</Button>

          <IconButton onClick={() => {
            toogleFavorite({id, img, categoria, descripcion, marca, modelo, precio, stock})
          }} aria-label="Agregar a favoritos">
            { existInFavorite(id) ? <FavoriteIcon color="error" /> : <FavoriteBorderIcon color="white" /> }
          </IconButton>
        </CardActions>
      </Card>
    </Grid>
  );
}