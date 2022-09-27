import { createContext, useState } from "react";

const CartContext= createContext();


const ContextProvider= ({ children })=>{

    // VARIABLES, ESTADOS, CONSTANTES QUE QUIERO QUE SEAN GLOBALES
    const [productosComprados, setProductosComprados]= useState([]);
    
    // DATA A EXPORTAR
    const data={productosComprados, setProductosComprados}

    return(<CartContext.Provider value={data} > {children} </CartContext.Provider>) 
}
export {ContextProvider}
export default CartContext 

