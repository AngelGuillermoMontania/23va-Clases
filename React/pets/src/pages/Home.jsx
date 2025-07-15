import { Button, ButtonGroup, Container } from "@mui/material"
import imageHome from "../assets/imageHome.jpg"
import { useNavigate } from "react-router"


const Home = () => {

  const navigate = useNavigate()

  return (
    <Container maxWidth={false} sx={{
      backgroundImage: `url("${imageHome}")`,
      height: "100vh",
      backgroundRepeat: "no-repeat",
      backgroundSize: "cover",
      display: "flex",
      justifyContent: "center",
      alignItems: "center"
    }}>
      <ButtonGroup size="large" variant="contained" aria-label="Basic button group">
        <Button onClick={() => navigate("/cat")}>Ver gatos</Button>
        <Button onClick={() => navigate("/dog")}>Ver perros</Button>
      </ButtonGroup>
    </Container>
  )
}

export default Home