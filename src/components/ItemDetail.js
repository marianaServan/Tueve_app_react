import React from 'react'
import ItemCount from './ItemCount'

const ItemDetail = ({ evento }) => {
    return (
        <div className="listaDeEventos">
            <div>
               <img src={evento.imagen} alt="" style={{ "maxWidth": "18rem" }} />
            </div>
            <div>
                <h5 className="card-title"> {evento.nombre} </h5>
                <p className="card-text">Descripción del evento, de qué se tarta, la fecha, el lugar, precio de la entrada, etc</p>
                <hr />
                <ItemCount evento={evento} initial={1} />
            </div>
        </div>
    )
}

export default ItemDetail