import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from "react-router";
import App from './App.jsx'
import Detalle from "./components/Detalle.jsx"
import Compra from "./components/Compra.jsx"
import './index.css'
import Carrito from './components/Carrito.jsx';
import Header from './components/Header.jsx';
import Error404 from './components/Error404.jsx';
import ContainCard from './components/ContainCard.jsx';

createRoot(document.getElementById('root')).render(
    <BrowserRouter>
      {/* EJEMPLO 1  */}
      {/* <Routes>
        <Route path='/detalle' element={<Detalle />} />
        <Route path="/compra" element={<Compra />} />
        <Route path='/carrito' element={<Carrito />} />
      </Routes> */}

      {/* EJEMPLO 2  */}
      {/* <Routes>
        <Route path="/" element={<App />} />
        <Route path='/detalle'>
          <Route index element={<Detalle />} />
          <Route path='compra'>
            <Route index element={<Compra />} />
            <Route path='carrito' element={<Carrito />} />
          </Route>
        </Route>
      </Routes> */}

      {/* EJEMPLO 3  */}
      {/* <Routes>
        <Route path="/" element={<App />} />
        <Route path='/comidas'>
          <Route index element={<Detalle />} />
          <Route path='compra'>
            <Route index element={<Compra />} />
            <Route path='carrito' element={<Carrito />} />
          </Route>
        </Route>
        <Route path='/ropa'>
          <Route index element={<DetalleRopa />} />
          <Route path='compra'>
            <Route index element={<Compra />} />
            <Route path='carrito' element={<Carrito />} />
          </Route>
        </Route>
        <Route path='/ortopedia'>
          <Route index element={<DetalleOrtopedia />} />
          <Route path='compra'>
            <Route index element={<Compra />} />
            <Route path='carrito' element={<Carrito />} />
          </Route>
        </Route>
      </Routes> */}

      {/* EJEMPLO 4  */}
      {/* <Header />
      <Routes>
        <Route path="/" element={<App />} />
        <Route path='/detalle'>
          <Route index element={<Detalle />} />
          <Route path='compra'>
            <Route index element={<Compra />} />
            <Route path='carrito' element={<Carrito />} />
          </Route>
        </Route>
        <Route path='*' element={<Error404 />} />
      </Routes> */}

      {/* EJEMPLO 5  */}
      <Header />
      <Routes>
        <Route path="/" element={<App />} />
        <Route path='/productos' element={<ContainCard />} />
        <Route path='/detalle/:idProduct'>
          <Route index element={<Detalle />} />
          <Route path='compra'>
            <Route index element={<Compra />} />
            <Route path='carrito' element={<Carrito />} />
          </Route>
        </Route>
        <Route path='*' element={<Error404 />} />
      </Routes>




      {/* AHORRADA */}
      <Header />
      <Routes>
        <Route path='/balance' element={<Balance />} />
        <Route path='/categorias'>
          <Route index element={<Categorias />} />
          <Route path='/editar/:idCategoria' element={<EditarCategoria />} />
        </Route>
        <Route path='/reportes' element={<Reportes />} />
        <Route path='/operaciones'>
          <Route path='/crear' element={<CrearOperacion />} />
          <Route path='/editar' element={<EditarOperacion />} />
        </Route>
      </Routes>
    </BrowserRouter>,
)
