import React from 'react'
import { useContext } from 'react'
import CartContext from '../context/CartContext'


const fragment= document.createDocumentFragment()


function Cart() {

  const { productosComprados } = useContext(CartContext)

  return (
    <div>
      <h1> Cart </h1>
      <div style={{border:"2px solid", margin:"5%"}}>
        <div style={{ display: "inline-block", margin: "5%" }}>
          <h5>Nombre</h5>
          <div id='nombre'> {productosComprados.length === 0
            ? "No hay productos en el carrito aun"
            : productosComprados.map((producto, index) => {
              return <div key={index}> <p> {producto.nombre} </p> <br /> </div>
            })
          } </div>
        </div>

        <div style={{ display: "inline-block", margin: "5%" }}>
          <h5>Cantidad</h5>
          <div id='cantidad'> {productosComprados.length === 0
            ? ""
            : productosComprados.map((producto, index) => {
              return <div key={index}> <p> {producto.cantidad} </p> <br /> </div>
            })
          } </div>
        </div>

        <div style={{ display: "inline-block", margin: "5%" }}>
          <h5> Precio </h5>
          <div id='precio'>
            {productosComprados.length === 0
              ? ""
              : productosComprados.map((producto, index) => {
                return <div key={index}> <p> {producto.precio} </p> <br /> </div>
              })
            } </div>
        </div>
      </div>
    </div>
  )
}

export default Cart



// const p= document.createElement("p");
//                 const br= document.createElement("br")
//                 p.textContent=producto.precio;
//                 fragment.appendChild(p, br)