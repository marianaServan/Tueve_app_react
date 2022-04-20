import React, {useContext, useState } from 'react'
import ItemCount from './ItemCount'
import { Link } from "react-router-dom"
import { miContexto } from '../MiContexto'
import { toast } from "react-toastify";


const ItemDetail = ({ evento }) => {

    const { addItem } = useContext(miContexto)

    const [countCart, setCountCart] = useState (0)
 
    const onAdd = (count) => {
        setCountCart(count)
        toast.success('Agregaste tickets al carrito', {
            position: "top-center",
            autoClose: 1500,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
        });
        addItem(evento,count);
    }

    return (
        <div className="listaDeEventos">
            <div>
               <img src={evento.imagen} alt="" style={{ "maxWidth": "18rem" }} />
            </div>
            <div>
                <h5 className="card-title"> {evento.nombre} </h5>
                <p className="card-text">Descripción del evento, de qué se trata, la fecha, el lugar, precio de la entrada, etc</p>
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