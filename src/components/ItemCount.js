import React from 'react'
import { useState } from 'react';

function ItemCount({ producto, initial }) {

    const [count, setCount] = useState(initial)

    const increment = () => {
        if (count < producto.stock) {
            setCount(count + 1)
        } else {
            alert('Producto agotado')
        }
    }

    const decrement = () => {
        if (count > 0) {
            setCount(count - 1)
        }
    }

    const onAdd = () => {
        alert('Agregaste al carrito ' + count + ' productos')
        setCount(initial)
    }

    return (
        <div className="card" style={{ "maxWidth": "18rem" }}>
            <div className="card-body">
                <h5 className="card-title"> {producto.nombre} </h5>
                <p className="card-text">Descripción del producto</p>
                <button onClick={decrement} className="btn botonesCounter"> - </button>
                <span> {count} </span>
                <button onClick={increment} className="btn botonesCounter"> + </button>
            </div>
            <div>
                <button disabled={count === 0} onClick={onAdd} className="btn botonesCounter"> Agregar al carrito </button>
            </div>
        </div>
    )
}

export default ItemCount