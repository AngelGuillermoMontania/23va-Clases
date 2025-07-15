import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { Badge } from "@mui/material";
import { useContext } from "react";
import { FavoriteContext } from "../../context/FavoriteContext";

export default function SearchAppBar() {
  const navigate = useNavigate();

  const { totalFavorites } = useContext(FavoriteContext);

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{ backgroundColor: "#000000c9" }}>
        <Toolbar>
          <Typography
            variant="h1"
            noWrap
            component="div"
            sx={{
              flexGrow: 1,
              display: { xs: "none", sm: "block" },
              fontFamily: "shlop",
            }}
          >
            Rick and Morty APP
          </Typography>
          <Stack spacing={2} direction="row">
            <Button
              variant="contained"
              color="error"
              onClick={() => navigate("/Favorites")}
              size="large"
              endIcon={
                <Badge badgeContent={totalFavorites()} color="primary">
                  <FavoriteIcon color="action" />
                </Badge>
              }
            >
              Favorites
            </Button>
            <Button
              variant="contained"
              color="success"
              onClick={() => navigate("/Alive")}
            >
              Alive
            </Button>

            <Button
              variant="contained"
              color="error"
              onClick={() => navigate("Dead")}
            >
              Dead
            </Button>

            <Button
              variant="contained"
              color="secondary"
              onClick={() => navigate("/unknown")}
            >
              Unknown
            </Button>

            <Button
              variant="contained"
              color="primary"
              onClick={() => navigate("/")}
            >
              Reset
            </Button>
          </Stack>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
