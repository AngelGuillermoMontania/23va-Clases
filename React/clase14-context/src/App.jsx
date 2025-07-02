import { useState } from "react"
import { BrowserRouter, Route, Routes } from "react-router"
import Home from "./views/Home"
import Cosa from "./views/Cosa"
import CountContextProvider from "./context/CountContext"


function App() {

  return (
    <BrowserRouter>
      <CountContextProvider>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cosa" element={<Cosa />} />
        </Routes>
      </CountContextProvider>
    </BrowserRouter>
  )
}

export default App
