import { Box, Typography } from "@mui/material";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import useCharacter from "../hooks/useCharacter";

export default function DetailCharacter() {
  const { idCharacter } = useParams();
  const { getCharacter, character  } = useCharacter()

  useEffect(() => {
    getCharacter(idCharacter)
  }, [])

  // material-ui
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: 2,
      }}
    >
      <Typography variant="h4">{character.name}</Typography>
      <img src={character.image} alt={character.name} />
      <Typography variant="body1">
        <strong>Species:</strong> {character.species}
      </Typography>
      <Typography variant="body1">
        <strong
          style={{
            color:
              character.status === "Alive"
                ? "green"
                : character.status === "Dead"
                ? "red"
                : "gray",
          }}
        >
          Status:
        </strong>{" "}
        {character.status}
      </Typography>
    </Box>
  );
}
