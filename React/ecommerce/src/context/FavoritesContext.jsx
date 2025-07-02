import { createContext, useEffect, useState } from "react";

export const FavoriteContext = createContext();

const FavoriteContextProvider = ({children}) => {

  const [ favorites, setFavorites ] = useState([])

  function toogleFavorite(newFavorite) {
    const existe = existInFavorite(newFavorite.id)
    if(existe) {
      setFavorites(favorites.filter(fav => fav.id !== newFavorite.id))
    } else {
      setFavorites([...favorites, newFavorite])
    }
  }

  function existInFavorite(id) {
    return favorites.some((fav) => fav.id == id)
  }

  function countInFavorite() {
    return favorites.length
  }

  const data = {
    favorites,
    toogleFavorite,
    existInFavorite,
    countInFavorite
  }

  return  <FavoriteContext.Provider value={data}>{children}</FavoriteContext.Provider>
}

export default FavoriteContextProvider