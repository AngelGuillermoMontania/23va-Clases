import { Box } from "@mui/material";
import CardCharacter from "../components/CardCharacter";
import { useContext } from "react";
import { FavoriteContext } from "../context/FavoriteContext";

export default function Favorite() {
  const { allFavorites } = useContext(FavoriteContext);

  return (
    <Box
      sx={{ display: "flex", justifyContent: "space-around", flexWrap: "wrap" }}
    >
      {allFavorites &&
        allFavorites.map((favorite) => {
          return <CardCharacter key={favorite.id} character={favorite} />;
        })}
    </Box>
  );
}
