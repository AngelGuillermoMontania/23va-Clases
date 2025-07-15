import { createContext, useEffect, useState } from "react";
import useLocalStorage from "../hooks/useLocalStorage";

export const FavoriteContext = createContext();

export default function FavoriteContextProvider({ children }) {
  const [allFavorites, setAllFavorites] = useState([]); // EN SOLUCION 1 --> null  || EN SOLUCION 2 ---> []
  const { get, set, ls } = useLocalStorage()

  const addFavorite = (favorite) => {
    setAllFavorites([...allFavorites, favorite]);
    set("favoritos", [...allFavorites, favorite])
  };

  const removeFavorite = (id) => {
    const newFavorites = allFavorites.filter((favorite) => favorite.id !== id);
    setAllFavorites(newFavorites);
    set("favoritos", newFavorites)
  };

  const isFavorite = (id) => {
    const exist = allFavorites?.some((character) => character.id === id);
    return exist;
  };

  const totalFavorites = () => {
    return allFavorites?.length;
  };

  const data = {
    allFavorites,
    addFavorite,
    removeFavorite,
    isFavorite,
    totalFavorites,
  };

  return (
    <FavoriteContext.Provider value={data}>{children}</FavoriteContext.Provider>
  );
}
