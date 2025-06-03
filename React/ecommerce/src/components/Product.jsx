import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Grid } from '@mui/material';

export default function Product({id, img, categoria, descripcion, marca, modelo, precio, stock}) {
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
        </CardContent>
        <CardActions>
          <Button size="small">Ver Detalle</Button>
          <Button size="small">Agregar al carrito</Button>
        </CardActions>
      </Card>
    </Grid>
  );
}