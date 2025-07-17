import { BrowserRouter, Routes, Route, Outlet } from "react-router"

import Home from "../pages/Home"
import DetailPet from "../pages/DetailPet"
import FavoritesPets from "../pages/FavoritesPets"
import AdoptPet from "../pages/AdoptPet"
import Header from "../components/Header"
import ListPetDog from "../pages/ListPetDog"
import ListPetCat from "../pages/ListPetCat"

function Dashboard() {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
}

function Router() {
  return <BrowserRouter>
    <Routes>
      <Route path="/">
        <Route index element={<Home />} />
        <Route element={<Dashboard />}>
          <Route path="/dog" element={<ListPetDog />} />
          <Route path="/cat" element={<ListPetCat />} />
          <Route path="/favoritos" element={<FavoritesPets />} />
          <Route path="/adopt" element={<AdoptPet />} />
          <Route path="/detail/:id" element={<DetailPet />} />
        </Route>
      </Route>
    </Routes>
  </BrowserRouter>
}

export default Router