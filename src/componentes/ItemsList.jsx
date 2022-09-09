import { useState, useEffect } from 'react';
import productos from "../helpers/productos.json"
import Item from './Item';


function ItemsList(){

    const[items, setItems]= useState([])

    useEffect(()=>{
        setTimeout(()=>{
            const items= new Promise((resolve, reject)=>{
                resolve(productos)
            })
            items.then( res => setItems(res))
        }, 2000)
        
    },[])
  return (
    <div>{items.map(( producto ) => {
        
       return <Item 
       key={producto.id}
       nombre={producto.producto}
       precio= {producto.precio}
       />
        
    })}</div>
  )
}

export default ItemsList