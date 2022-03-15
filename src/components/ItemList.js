import React from 'react'
import Item from './Item'

function ItemList({ productosAListar }) {

    return (
        <div className="listaDeProductos">

            {productosAListar.map((producto) => {
                return <Item key={producto.id} producto={producto} />
            })}

        </div>
    )
}

export default ItemList