import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import imageHeader from "../assets/imageHeader.jpg"
import { useNavigate } from 'react-router';

export default function Header() {

  const navigate = useNavigate()

  return (
    <Box>
      <AppBar position="static" sx={{
      backgroundImage: `url("${imageHeader}")`,
      backgroundRepeat: "no-repeat",
      backgroundSize: "contain",
      backgroundPosition: "top",
      backgroundColor: "secondary.main",
      color: "text.primary",
    }}>
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            RAZAS PETS
          </Typography>
          <Button variant='contained' sx={{color: "text.primary"}} onClick={() => {navigate("/adopt")}}>Adoptar una raza</Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}