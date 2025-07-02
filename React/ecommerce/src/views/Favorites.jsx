import { Chip, Divider, Grid, TextField } from "@mui/material"
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

import { useContext } from "react"
import { useNavigate } from "react-router";
import { FavoriteContext } from "../context/FavoritesContext";

export default function Favorites() {

  const { favorites, toogleFavorite } = useContext(FavoriteContext)
  const navigate = useNavigate()

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
          favorites.map(fav => 
          <Grid key={fav.id}>
            <Card sx={{ maxWidth: 200 }}>
              <CardMedia
                component="img"
                alt="green iguana"
                height="150"
                image={fav.img}
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {fav.marca} - {fav.modelo}
                </Typography>
                <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                  {fav.descripcion}
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
                    <Button size="small" variant="contained" onClick={() => toogleFavorite({id: fav.id})}>Eliminar De Favoritos</Button>
                  </Grid>
                </Grid>
              </CardContent>
              <CardActions>
                <Button size="medium" onClick={() => navigate(`/detail/${fav.id}`)}>Ver Detalle</Button>
                {/* <Button size="large" onClick={() => cartContext.addToCart({id, img, categoria, descripcion, marca, modelo, precio, stock}, 1)}>Agregar al carrito</Button> */}
              </CardActions>
            </Card>
          </Grid>)
        }
      </Grid>
    </>
  )
}
