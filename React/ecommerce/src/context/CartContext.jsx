import { createContext, useState } from "react";

export const CartContext = createContext();

const CartContextProvider = ({children}) => {

  const [cart, setCart] = useState([])   // [{id: 54, ...datos ,cantidad: 6}, {id: 87, ...datos ,cantidad: 3}]

  function existeProducto(id) {
    const existe = cart.some(elem => elem.id === id)
    return existe
  }

  function addToCart(producto, cantidad) {
    if(existeProducto(producto.id)) {
      const newCart = cart.map(productInCart => {
        if(productInCart.id === producto.id) {
          return {
            ...productInCart,
            cantidad: productInCart.cantidad + cantidad
          }
        } else {
          return productInCart
        }
      })
      setCart(newCart)
    } else {
      const productoAgregar = { ...producto, cantidad }
      setCart([...cart, productoAgregar])
    } 
  }

  function countInCart() {
    return cart.reduce((acc, curr) => {
      return acc + curr.cantidad
    }, 0)
  }

  function setCantidadInProduct(id, cantidad) {
    if(existeProducto(id)) {
      if(cantidad > 0) {
        const newCart = cart.map(productInCart => {
          if(productInCart.id === id) {
            return {
              ...productInCart,
              cantidad: cantidad
            }
          } else {
            return productInCart
          }
        })
        setCart(newCart)
      }
    }
  }

  function eliminarProductInCartXid(id) {
    const newCart = cart.filter(productInCart => productInCart.id !== id)
    setCart(newCart)
  }

  function valorTotalInCart() {
    return cart.reduce((acc, curr) => {
      return acc + (curr.precio * curr.cantidad)
    }, 0)
  }

  function valorTotalProductInCartxID(id) {
    const productBuscado = cart.find(productInCart => productInCart.id == id)
    const suma = productBuscado.precio * productBuscado.cantidad
    return suma
  }

  const data = {
    addToCart,
    cart,
    countInCart,
    setCantidadInProduct,
    eliminarProductInCartXid,
    valorTotalInCart,
    valorTotalProductInCartxID
  }

  return  <CartContext.Provider value={data}>{children}</CartContext.Provider>
}

export default CartContextProvider