import { BrowserRouter, Routes, Route } from "react-router"
import Home from "./views/Home"
import ContainCharacters from "./views/ContainCharacters"
import DetailCharacter from "./views/DetailCharacter"

// Home   ===>  /
// ContainCharacters  ===> /characters
// DetailCharacter  ===>  /characters/id


function App() {
  
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/characters">
          <Route index element={<ContainCharacters />} />
          <Route path=":idCharacter" element={<DetailCharacter />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
