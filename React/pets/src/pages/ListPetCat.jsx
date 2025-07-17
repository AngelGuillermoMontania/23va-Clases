import { Grid, ImageList, ImageListItem, InputLabel, MenuItem, Select } from "@mui/material"
import { useEffect } from "react"
import { useParams } from "react-router"
import useCat from "../hooks/useCat"

const ListPetCat = () => {

  const { type } = useParams()
  const { razaSeleccionada, imagenesRaza, obtenerListaImagenesRaza, obtenerRazasMascotas, razas, changeRazaSeleccionada } = useCat()
  
  useEffect(() => {
    if(razas.length == 0) {
      obtenerRazasMascotas()
    } 
    obtenerListaImagenesRaza()
  }, [razaSeleccionada])

  return (
    <Grid container direction="column" sx={{
    justifyContent: "center",
    alignItems: "center",
    bgcolor: "primary.main"
  }} minHeight="95vh">
      <Grid width="50%">
        <InputLabel id="demo-simple-select-label">Age</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          value={razaSeleccionada}
          onChange={(e) => {
                changeRazaSeleccionada(e.target.value)
              }}
          label="Raza"
          size="medium"
          fullWidth
          sx={{
            fontSize: "20px"
          }}
        >
          {
            razas.map(elem => <MenuItem key={elem.id} value={elem.id}>{elem.name}</MenuItem>)
          }
        </Select>
      </Grid>
      <Grid container direction="row" spacing={3} justifyContent="center" alignItems="center" padding="15px">
        <ImageList variant="masonry" cols={3} gap={8}>
          {imagenesRaza.map((item) => (
            <ImageListItem key={item.id}>
              <img
                srcSet={`${item.url}`}
                src={item.url}
                alt={item.id}
                loading="lazy"
              />
            </ImageListItem>
          ))}
        </ImageList>
      </Grid>
    </Grid>
  )
}

export default ListPetCat