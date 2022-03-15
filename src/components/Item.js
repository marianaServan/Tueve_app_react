import React from 'react'


function Item({ producto }) {
    return (
        <div className="card" style={{ "maxWidth": "20rem" }}>
            <div className="card-body">
                <img src={producto.imagen} alt="" style={ {"maxWidth": "18rem"}}/>
                <h5 className="card-title"> {producto.nombre} </h5>
                <p className="card-text">Descripción del producto</p>
                <button className="btn botonesCounter"> Ver más </button>
            </div>
        </div>

    )
}

export default Item