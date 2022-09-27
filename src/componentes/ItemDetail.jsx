import "../css/itemDetail.css"
import ItemCount from "./ItemCount"
import { useContext, useState } from "react"
import { Link } from "react-router-dom"
import CartContext from "../context/CartContext"


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

function ItemDetail({ nombre, colores, precio, cuotas, stock, id }) {

  const [comprar, setComprar]= useState(false);
  const {productosComprados,setProductosComprados, sumarPrecios}= useContext(CartContext);
  
  function agregarProductoAlCarrito(producto){
    let productoAgregado=[...productosComprados, producto];
    setProductosComprados(productoAgregado);
  };

  const sumarAlCarrito= (e)=>{

    if(e.nativeEvent.path[2].querySelector("div").querySelector("div").querySelector("div").textContent== 0){
      alert("Para comprar debe marcar la cantidad de productos que desea")
    }
    else{
      const productoComprado= {
        nombre: e.nativeEvent.path[2].querySelector("h4").textContent,
        cantidad: parseInt(e.nativeEvent.path[2].querySelector("div").querySelector("div").querySelector("div").textContent),
        precio: parseInt(e.nativeEvent.path[2].querySelectorAll("p")[1].textContent)*parseInt(e.nativeEvent.path[2].querySelector("div").querySelector("div").querySelector("div").textContent),
        id: e.nativeEvent.path[2].id, 
      }
      
      setComprar(true)
      e.nativeEvent.path[1].innerHTML="";
      agregarProductoAlCarrito(productoComprado);
      console.log(productosComprados)
      
      
      
    }
    
    
  }
  return (
    <div className='item-detail' id={id}>
      <h4>{nombre}</h4>
      <p>{colores}</p>
      <p>{precio}</p>
      <p>{cuotas}</p>
      { comprar 
      ? <Link to="/cart" onClick={sumarPrecios}>Terminar compra</Link>
      : <ItemCount nombreProducto={nombre} stockProducto={stock} sumarAlCarrito={sumarAlCarrito}/> 
      }
      <div>
      <button onClick={sumarAlCarrito} style={{"marginTop":"5%"}}> Comprar </button>
      </div>
    </div>
  )
}

export default ItemDetail
