import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Header from "./components/static/Header.jsx";
import { ContainCard, DetailCharacter, Favorite } from "./views";
import FavoriteContextProvider from "./context/FavoriteContext.jsx";

function App() {
  return (
    <BrowserRouter>
      <FavoriteContextProvider>
        <Header />
        <Routes>
          <Route path="/" element={<ContainCard />} />
          <Route path="/:filterStatus" element={<ContainCard />} />
          <Route path="/detail/:idCharacter" element={<DetailCharacter />} />
          <Route path="/Favorites" element={<Favorite />} />
          <Route path="*" element={<h2>ERROR 404 NOT FOUND</h2>} />
        </Routes>
      </FavoriteContextProvider>
    </BrowserRouter>
  );
}

export default App;
