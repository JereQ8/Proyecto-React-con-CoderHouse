import React, { useState } from 'react';


function ItemCount({ stock, nombreProducto }) {

    const [contador, setContador] = useState(0)

    const sumar = () => {
        if (contador === stock) {
        }
        else {
            setContador(contador + 1)
        }
    }

    const restar = () => {
        if (contador === 0) {
        }
        else {
            setContador(contador - 1)
        }

    }

    return (
        <div>
            <b>{nombreProducto}</b>
            <p>Stock: {stock}</p>
            <div className='sumadorProductos'>
                <button onClick={sumar}> + </button>
                <div> {contador} </div>
                <button onClick={restar}> - </button>
            </div>
        </div>
    )
}

export default ItemCount