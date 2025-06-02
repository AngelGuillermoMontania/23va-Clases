import { Button, Card, styled } from '@mui/material';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';


export default function Contenedor() {

  const ButtonPersonalizado = styled(Button)({
    backgroundColor: "#FF22FF"
  })

  return <Container fixed>
    <Grid
      container
      direction="row"
      sx={{
        flexDirection: {
          xs: "row", // Mobile
          sm: "row",    // Tablet en adelante
        },
        alignItems: {
          xs: "stretch",
          sm: "center",
        },
        justifyContent: {
          xs: "center",
          sm: "space-between",
        },
        mt: {
          xs: "50px",
          sm: "25px",
          xl: "0px"
        },
        backgroundColor: {
          xs: "black",
          sm: "red"
        }
      }}
    >
      <Grid> {/* CAJA 1 */}
        <Card>
          Hola
        </Card>
      </Grid>
      <Grid> {/* CAJA 2 */}
        <Button variant='contained' color='chimichurri' sx={{
          height: {
            xs: "10px",
            md: "2rem"
          }
        }}>Hola</Button>
        <Button variant='contained' color='chimichurri'>Chau</Button>
      </Grid>
      <Grid> {/* CAJA 3 */}
        Chau
      </Grid>
      
    </Grid>
  </Container>
}


<section style={{display: 'flex'}}>
  <div></div>
  <div></div>
  <div></div>
</section>