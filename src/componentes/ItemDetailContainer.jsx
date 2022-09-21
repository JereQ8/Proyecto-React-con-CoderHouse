import React from 'react'
import { useEffect, useState } from 'react'
import ItemDetail from './ItemDetail'
import "../css/itemDetail.css"




function ItemDetailContainer() {

    const [contenido, setContenido]= useState(false);
    const [data, setData]= useState([])

    useEffect(()=>{
        const datos= new Promise((res, rej)=>{
            setTimeout(()=>{
                res([
                    {
                        producto:"Heladera",
                        precio: 80000,
                        color:"Blanca o Gris",
                        cuotas:"Hasta 12 cuotas sin interes",
                        stock:4,
                        id:0       
                    },
                    {
                        producto:"Microondas",
                        precio: 42000,
                        color:"Blanco o Gris",
                        cuotas:"Hasta 12 cuotas sin interes",
                        stock:6,
                        id:1
                    },
                    {
                        producto:"Iphone 12",
                        precio: 50000,
                        color:"Blanco, Gris, Gris oscuro, Negro y Dorado",
                        stock:2,
                        cuotas:"Hasta 6 cuotas sin interes",
                        id:2
                    },
                    {
                        producto:"Notebook",
                        precio: 150000,
                        color:"Blanca, Plateada o Negra",
                        cuotas:"Hasta 12 cuotas sin interes",
                        stock:5,
                        id:3
                    },
                    {
                        producto:"Bicicleta",
                        precio: 20000,
                        color:"Roja, amarilla, azul, verde",
                        cuotas:"Hasta 6 cuotas sin interes",
                        stock:3,
                        id:4
                    }
                ])
            },1000)
           
        })

        datos.then(datos =>{
            setData(datos)
            setContenido(true)
            
        })
    }, [])

    return (
        <div className='cont-item-detail'>
            { contenido ? data.map((producto)=>{
                return <ItemDetail nombre={producto.producto} colores={producto.color} cuotas={producto.cuotas} precio={producto.precio} stock={producto.stock} key={producto.id}/>
            }) : "Cargando..."}
        </div>
    )
}

export default ItemDetailContainer