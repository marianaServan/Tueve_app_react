import React from 'react'
import { useState } from 'react';

function ItemCount({ evento, initial, onAdd }) {

    const [count, setCount] = useState(initial)

    const increment = () => {
        if (count < evento.stock) {
            setCount(count + 1)
        } else {
            alert('Entradas agotadas')
        }
    }

    const decrement = () => {
        if (count > 0) {
            setCount(count - 1)
        }
    }

    return (
        <div>
            <div>
                <button onClick={decrement} className="btn botonesCounter"> - </button>
                <span> {count} </span>
                <button onClick={increment} className="btn botonesCounter"> + </button>
            </div>
            <div>
                <button
                disabled={count === 0} 
                onClick={() => onAdd(count)} 
                className="btn botonesCounter"> 
                    Agregar al carrito 
                </button>
            </div>
        </div>
    )
}

export default ItemCount