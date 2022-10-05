import React from 'react'
import { useEffect, useState } from 'react'
import ItemDetail from './ItemDetail'
import "../css/itemDetail.css"
import {getFirestore, getDocs, collection} from "firebase/firestore";
import { app } from "../firebase/firebase"



// 

function ItemDetailContainer() {

    const [contenido, setContenido]= useState(false);
    const [data, setData]= useState([])

    useEffect(()=>{
        const querydb= getFirestore();
        const queryCollection= collection(querydb, "products");
        getDocs(queryCollection)
            .then(datos=>{
                console.log(datos.docs.map(producto=>console.log(producto.data(), producto.id)));
                setData(datos.docs)
                setContenido(true)
            } )
            
    }, [])

    return (
        <div className='cont-item-detail'>
            { contenido ? data.map((producto)=>{
                return <ItemDetail nombre={producto.data().producto} colores={producto.data().color} cuotas={producto.data().cuotas} precio={producto.data().precio} stock={producto.data().stock} key={producto.id} id={producto.id} />
            }) : "Cargando..."}
        </div>
    )
}

export default ItemDetailContainer

// const datos= new Promise((res, rej)=>{
//     setTimeout(()=>{
//         res([
//             {
//                 producto:"Heladera",
//                 precio: 80000,
//                 color:"Blanca o Gris",
//                 cuotas:"Hasta 12 cuotas sin interes",
//                 stock:4,
//                 id:"p0"       
//             },
//             {
//                 producto:"Microondas",
//                 precio: 42000,
//                 color:"Blanco o Gris",
//                 cuotas:"Hasta 12 cuotas sin interes",
//                 stock:6,
//                 id:"p1"
//             },
//             {
//                 producto:"Iphone 12",
//                 precio: 50000,
//                 color:"Blanco, Gris, Gris oscuro, Negro y Dorado",
//                 stock:2,
//                 cuotas:"Hasta 6 cuotas sin interes",
//                 id:"p2"
//             },
//             {
//                 producto:"Notebook",
//                 precio: 150000,
//                 color:"Blanca, Plateada o Negra",
//                 cuotas:"Hasta 12 cuotas sin interes",
//                 stock:5,
//                 id:"p3"
//             },
//             {
//                 producto:"Bicicleta",
//                 precio: 20000,
//                 color:"Roja, amarilla, azul, verde",
//                 cuotas:"Hasta 6 cuotas sin interes",
//                 stock:3,
//                 id:"p4"
//             },
//             {
//                 producto:"Mesa de luz",
//                 precio: 15000,
//                 color:"Negra, Marron",
//                 cuotas:"Hasta 6 cuotas sin interes",
//                 stock:10,
//                 id:"p5"
//             },
//             {
//                 producto:"Monitor 24'",
//                 precio: 25000,
//                 color:"",
//                 cuotas:"Hasta 6 cuotas sin interes",
//                 stock:8,
//                 id:"p6"
//             },
//             {
//                 producto:"Termo",
//                 precio: 20000,
//                 color:"Negro, Mate, Verde",
//                 cuotas:"Hasta 12 cuotas sin interes",
//                 stock:5,
//                 id:"p7"
//             },
//             {
//                 producto:"Biblioteca",
//                 precio: 35000,
//                 color:"Marron",
//                 cuotas:"Hasta 12 cuotas sin interes",
//                 stock:15,
//                 id:"p8"
//             },
//             {
//                 producto:"Licuadora",
//                 precio: 35000,
//                 color:"Negro, Gris, Blanco",
//                 cuotas:"Hasta 6 cuotas sin interes",
//                 stock:6,
//                 id:"p9"
//             },
//             {
//                 producto:"Guitarra",
//                 precio: 20000,
//                 color:"Negro, Marron, Verde",
//                 cuotas:"Hasta 6 cuotas sin interes",
//                 stock:3,
//                 id:"p10"
//             }
//         ])
//     },1000)
   
// })

// datos.then(datos =>{
//     setData(datos)
//     setContenido(true)
    
// })