import React from 'react'
import ItemCount from './ItemCount'


function ContenedorItemsStock() {
    return (
        <div>
            <ItemCount stock={5} nombreProducto="Lavarropa" />
            <ItemCount stock={3} nombreProducto="Microonda" />
            <ItemCount stock={8} nombreProducto="Tostadora" />
            <ItemCount stock={1} nombreProducto="Plancha" />
            <ItemCount stock={4} nombreProducto="Maquina afeitadora" />
        </div>
    )
}

export default ContenedorItemsStock