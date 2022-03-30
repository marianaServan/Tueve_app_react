import React from "react";

const ItemCarrito = ({ item, removeItem }) => {
  return (
    <div className="card">
      <div className="card-body">
        <h5 className="card-title"> {item.nombre} </h5>
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <p className="card-text"> ${item.precio} x {item.cantidad} </p>
            </div>
            <div className="col-md-6">
              <button className="btn botonesCounter" onClick={ () => removeItem(item.id) }>Eliminar</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItemCarrito;
