import ContainProduct from "./views/ContainProduct"
import DetailProduct from "./views/DetailProduct"
import Cart from "./views/Cart"
import Header from "./components/Header"

import { ThemeProvider, createTheme } from "@mui/material"

import { BrowserRouter, Routes, Route } from "react-router"
import CartContextProvider from "./context/CartContext"
import FavoriteContextProvider from "./context/FavoritesContext"
import Favorites from "./views/Favorites"

const theme = createTheme({})

function App() {

  return (
    <ThemeProvider theme={theme}>
      <CartContextProvider>
        <FavoriteContextProvider>
          <BrowserRouter>
            <Header />
            <Routes>
              <Route path="/" element={<ContainProduct />} />
              <Route path="/:categoria" element={<ContainProduct />} />
              <Route path="/detail/:idProduct" element={<DetailProduct />} />
              <Route path="/cart" element={<Cart />} />
              <Route path="/favoritos" element={<Favorites />} />
            </Routes>
          </BrowserRouter>
        </FavoriteContextProvider>
      </CartContextProvider>
    </ThemeProvider>
  )
}

export default App
