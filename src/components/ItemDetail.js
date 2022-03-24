import React from 'react'
import ItemCount from './ItemCount'
import { Link } from "react-router-dom"

const ItemDetail = ({ evento }) => {

    const [countCart, setCountCart] = React.useState (0)
 
    const onAdd = (count) => {
        setCountCart(count)
        console.log('Agregaste al carrito productos')
    }

    return (
        <div className="listaDeEventos">
            <div>
               <img src={evento.imagen} alt="" style={{ "maxWidth": "18rem" }} />
            </div>
            <div>
                <h5 className="card-title"> {evento.nombre} </h5>
                <p className="card-text">Descripción del evento, de qué se tarta, la fecha, el lugar, precio de la entrada, etc</p>
                <hr />

                { countCart === 0? 
                    <ItemCount evento={evento} initial={1} onAdd={onAdd} />
                    :
                    <Link to="/Carrito" className="btn botonesCounter"> Terminar compra </Link>
                }
                
            </div>
        </div>
    )
}

export default ItemDetail