import { BrowserRouter, Route, Routes } from "react-router"
import Home from "./views/Home"
import About from "./views/About"


function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
