import React from 'react'
import { useEffect } from 'react'
import { Link } from "react-router-dom"
import { useContext, useState } from 'react'
import CartContext from '../context/CartContext'
import {collection, addDoc, getFirestore} from "firebase/firestore"



function Cart() {

  useEffect(() => {
    pintarValorTotal()
  })

  const { productosComprados, setProductosComprados, totalPrice } = useContext(CartContext)
  const [valorTotal, setValorTotal] = useState(0)
  // Cada vez que el array "productosComprados" cambie se pinta de nuevo el carrito


  const eliminarProductoDelCarrito = (e) => {
    //Eliminar del array, para eso debo ejecutar "setProductosComprados", no debo cambiarlo como si fuese un array, porque es un estado enrealidad
    // Splice modifica el array original, primer parametro es el index del elemento a eliminar, y segundo parametro es la cant. de elementos a eliminar
    let idProductoAEliminar = e.nativeEvent.path[2].id;
    let objetoAEliminar = productosComprados.find(elemento => elemento.id === idProductoAEliminar);
    let indiceDeObjetoAEliminar = productosComprados.indexOf(objetoAEliminar);
    let arrayCopiaDeProductosComprados = [...productosComprados];
    arrayCopiaDeProductosComprados.splice(indiceDeObjetoAEliminar, 1)
    setProductosComprados(arrayCopiaDeProductosComprados);

    pintarValorTotal()
  }

  const order={
    buyer:"Jeremias Quinteros",
    adress:"Pipi Cucu 777",
    items:productosComprados.map(producto=>({id:producto.id, name:producto.nombre, quantity:producto.cantidad, price:producto.precio})) ,
    totalPrice: totalPrice()
  }

  const pintarValorTotal = () => {
    let acumulador = 0;
    for (let i = 0; i < productosComprados.length; i++) {
      acumulador = acumulador + productosComprados[i].precio
    }

    setValorTotal(acumulador)
  }

  const realizarOrden= () =>{
    const db= getFirestore();
    const collectionOrder= collection(db, "orders");
    addDoc(collectionOrder, order)
    .then(({id})=>console.log(id))
    console.log(order)
  }




  return (
    <div>
      <h3>Cart</h3>
      <div style={{ border: "2px solid", margin: "5%" }}>

        <div style={{ display: "inline-block", width: "20%", padding: "2%" }}> <b>Producto</b> </div>
        <div style={{ display: "inline-block", width: "20%", padding: "2%" }}> <b>Cantidad</b> </div>
        <div style={{ display: "inline-block", width: "20%", padding: "2%" }}> <b>Precio</b> </div>

        <div id='productos'>
          {productosComprados.length === 0
            ? <div style={{ paddingLeft: "2%" }}><b> No hay items en el carrito </b> <p>Si desea agregar productos presione <Link to="/productosConDetalles">Aqui</Link> </p> </div>
            : productosComprados.map((producto, index) => {
              return <div id={producto.id} key={index}>
                <p className="productoEnCarrito">{producto.nombre}</p>
                <p className="productoEnCarrito"> {producto.cantidad} <button onClick={eliminarProductoDelCarrito}> Eliminar item </button> </p>
                <p className="productoEnCarrito">{producto.precio}</p>
              </div>

            })
          }
          <div style={{width:"45%", display:"flex", flexDirection:"column", alignItems:"end"}}>
            <h3>Total</h3>
            <p> {valorTotal} </p>
          </div>
        </div>
      </div>
      <div>
          {productosComprados.length === 0 ? "" : <button onClick={realizarOrden}> Generar orden de compra </button> }

      </div>
    </div>
  )
}

export default Cart



/* <h1> Cart </h1>
 */

// productosComprados.map((producto, index) => {
            //   return <div id={producto.id} key={index}>
            //     <p style={{ display: "inline-block", width: "20%", padding: "2%" }}>{producto.nombre}</p>
            //     <p style={{ display: "inline-block", width: "20%", padding: "2%" }}> {producto.cantidad} <button onClick={eliminarDelCarrito}>Eliminar item</button> </p>
            //     <p style={{ display: "inline-block", width: "20%", padding: "2%" }}>{producto.precio}</p>
            //   </div>

            // })