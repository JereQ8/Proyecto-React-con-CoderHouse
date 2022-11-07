import { createContext, useState } from "react";

const CartContext= createContext();


const ContextProvider= ({ children })=>{

    // VARIABLES, ESTADOS, CONSTANTES QUE QUIERO QUE SEAN GLOBALES
    const [productosComprados, setProductosComprados]= useState([]);

    function totalPrice(){
        let acumulador=0
        productosComprados.forEach(producto=>{
            acumulador+=producto.precio
        })
        console.log(acumulador);
        return acumulador
    }
    
    // DATA A EXPORTAR
    const data={productosComprados, setProductosComprados, totalPrice}

    return(<CartContext.Provider value={data} > {children} </CartContext.Provider>) 
}
export {ContextProvider}
export default CartContext 

