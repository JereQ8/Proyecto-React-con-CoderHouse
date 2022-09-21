import "../css/itemDetail.css"
import ItemCount from "./ItemCount"
import { useState } from "react"
import { Link } from "react-router-dom"


const llevarAlCart= ()=>{
  alert("eso brad")
}

export function botonLlevarAlCart(){
  return(
    <div>
      <button onClick={llevarAlCart}> Ver Carrito </button>
    </div>
  )
}

function ItemDetail({ nombre, colores, precio, cuotas, stock }) {

  const [comprar, setComprar]= useState(false)

  const sumarAlCarrito= (e)=>{
    setComprar(true)
    e.nativeEvent.path[1].innerHTML="" 
  }

  

  return (
    <div className='item-detail' >
      <h4>{nombre}</h4>
      <p>{colores}</p>
      <p>{precio}</p>
      <p>{cuotas}</p>
      { comprar 
      ? <Link to="/cart">Terminar compra</Link>
      : <ItemCount nombreProducto={nombre} stockProducto={stock} sumarAlCarrito={sumarAlCarrito}/> 
      }
      <div>
      <button onClick={sumarAlCarrito} style={{"margin-top":"5%"}}> Comprar </button>
      </div>
    </div>
  )
}

export default ItemDetail
