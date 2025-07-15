import {
  Button,
  Card,
  CardContent,
  CardMedia,
  Typography,
  CardActions,
} from "@mui/material";
import { Link as LinkDelRouter, useNavigate } from "react-router-dom";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { useContext } from "react";
import { FavoriteContext } from "../context/FavoriteContext";

export default function CardCharacter({ character }) {
  const navigate = useNavigate();

  const { addFavorite, isFavorite, removeFavorite } =
    useContext(FavoriteContext);

  return (
    <Card
      sx={{
        maxWidth: 345,
        margin: "20px",
        border: "1px solid #a3a2a2",
        boxShadow: "1px 1px 12px 0px rgba(77,74,74,0.75)",
      }}
    >
      <CardMedia
        sx={{ height: 250, width: 250 }}
        image={character.image}
        title="green iguana"
        onClick={() => {
          navigate(`/detail/${character.id}`);
        }}
      />
      <CardContent
        onClick={() => {
          navigate(`/detail/${character.id}`);
        }}
      >
        <Typography
          gutterBottom
          component="div"
          sx={{
            display: "flex",
            flexWrap: "wrap",
            fontSize: "1rem",
            color: "#080854",
            fontWeight: "bold",
          }}
        >
          {character.name}
        </Typography>
        <Typography
          component="div"
          sx={{
            display: "flex",
            alignItems: "center",
            fontWeight: "bold",
            color: "#212120",
          }}
        >
          Gender:{" "}
          <Typography sx={{ color: "#080854", marginLeft: "5px" }}>
            {character.gender}
          </Typography>
        </Typography>
        <Typography
          component="div"
          sx={{
            display: "flex",
            alignItems: "center",
            fontWeight: "bold",
            color: "#212120",
          }}
        >
          Species:{" "}
          <Typography sx={{ color: "#080854", marginLeft: "5px" }}>
            {character.species}
          </Typography>
        </Typography>
        <Typography
          component="div"
          sx={{
            display: "flex",
            alignItems: "center",
            fontWeight: "bold",
            color: "#212120",
          }}
        >
          Status:{" "}
          <Typography sx={{ color: "#080854", marginLeft: "5px" }}>
            {character.status}
          </Typography>
        </Typography>
      </CardContent>
      <CardActions>
        {isFavorite(character.id) ? (
          <Button onClick={() => removeFavorite(character.id)}>
            <FavoriteIcon /> {/* corazon lleno */}
          </Button>
        ) : (
          <Button onClick={() => addFavorite(character)}>
            <FavoriteBorderIcon />
          </Button>
        )}
      </CardActions>
    </Card>
  );
}
