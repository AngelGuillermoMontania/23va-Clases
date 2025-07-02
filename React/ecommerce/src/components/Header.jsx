import { useContext, useState } from 'react';
import { useNavigate } from 'react-router';

import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/Adb';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Badge } from '@mui/material';
import { CartContext } from '../context/CartContext';
import FavoriteIcon from "@mui/icons-material/Favorite";
import { FavoriteContext } from '../context/FavoritesContext';

const categorias = ['zapatos', 'deportivas', 'urbanas'];
const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

function Header() {

  const navigate = useNavigate()
  const { countInCart } = useContext(CartContext)
  const { countInFavorite } = useContext(FavoriteContext)

  const [anchorElNav, setAnchorElNav] = useState(null);
  const [anchorElUser, setAnchorElUser] = useState(null);


  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = (textCategory) => {
    setAnchorElNav(null);
  };

  const handleCloseNavMenuYNavegaACategoria = (textCategory) => {
    setAnchorElNav(null);
    navigate(`/${textCategory}`)
  }

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>

          {/* LOGO Y TITULO DEL HEADER/PAGINA */}
          <Box onClick={() => navigate("/")}>
            <AdbIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />
            <Typography
              variant="h6"
              noWrap
              sx={{
                mr: 2,
                display: { xs: 'none', md: 'flex' },
                fontFamily: 'monospace',
                fontWeight: 700,
                color: 'inherit',
                textDecoration: 'none',
              }}
            >
              CalzAdas
            </Typography>
          </Box>

              {/* Esto es mobile y menu hamburguesa */}
          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              onOpen
              sx={{ display: { xs: 'block', md: 'none' } }}
            >
              {categorias.map((page) => (
                <MenuItem key={page} onClick={() => handleCloseNavMenuYNavegaACategoria(page)}>
                  <Typography sx={{ textAlign: 'center' }}>{page}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <AdbIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} />

          {/* TITULO DE LA PAGINA */}
          <Typography
            variant="h5"
            noWrap
            onClick={() => navigate("/")}
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            CalzAdas
          </Typography>


          {/* ESTO SERIA EN ESCRITORIO */}
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {categorias.map((page) => (
              <Button
                key={page}
                onClick={() => handleCloseNavMenuYNavegaACategoria(page)}
                sx={{ my: 2, color: 'white', display: 'block' }}
              >
                {page}
              </Button>
            ))}
          </Box>
          <Box sx={{ flexGrow: 0 }}>
            <Badge badgeContent={countInCart()} color="error">
              <ShoppingCartIcon fontSize='large' onClick={() => navigate("/cart")} />
            </Badge>
            <Badge badgeContent={countInFavorite()} color="error">
              <FavoriteIcon color="error" fontSize='large' onClick={() => navigate("/favoritos")} />
            </Badge>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default Header;