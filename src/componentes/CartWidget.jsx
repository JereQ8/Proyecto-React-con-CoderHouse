import carrito from "../imgs/cart-solid-24.png"
import { Link } from "react-router-dom"
import "../css/cartWidget.css"
import CartContext from "../context/CartContext"
import React, { useContext } from 'react'

function CartWidget() {

  const {productosComprados}= useContext(CartContext)

  return (
    <div>
      {
        productosComprados.length===0 
        ? ""
        : <Link className="numItems" to="/cart"><img src={carrito} alt="" /> {productosComprados.length} </Link>
      }
        
        
    </div>
  )
}

export default CartWidget