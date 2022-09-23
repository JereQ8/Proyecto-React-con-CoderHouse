import { createContext, useState } from "react";

const CartContext= createContext();

const ContextProvider= ({ children })=>{

    // VARIABLES, ESTADOS, CONSTANTES QUE QUIERO QUE SEAN GLOBALES
    const [productosComprados, setProductosComprados]= useState([]);
    const [comprar, setComprar]= useState(false);

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
          precio: parseInt(e.nativeEvent.path[2].querySelectorAll("p")[1].textContent)*parseInt(e.nativeEvent.path[2].querySelector("div").querySelector("div").querySelector("div").textContent) 
        }
        
        setComprar(true)
        e.nativeEvent.path[1].innerHTML="";
        agregarProductoAlCarrito(productoComprado);
        console.log(productosComprados)
         }
    }
    // DATA A EXPORTAR
    const data={productosComprados, agregarProductoAlCarrito, sumarAlCarrito}

    return(<CartContext.Provider value={data} > {children} </CartContext.Provider>) 
}
export {ContextProvider}
export default CartContext 

