import React from 'react'
import ItemCount from './ItemCount'

const ItemDetail = ({ producto }) => {
    return (
        <div className="listaDeProductos">
            <div>
                <img src={producto.imagen} alt="" style={{ "maxWidth": "18rem" }} />
            </div>
            <div>
                <h5 className="card-title"> {producto.nombre} </h5>
                <p className="card-text">Descripción del producto</p>
                <hr />
                <ItemCount producto={producto} initial={1} />
            </div>
        </div>
    )
}

export default ItemDetail