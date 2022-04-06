import React, { useContext } from "react";
import { Link } from "react-router-dom"
import { miContexto } from "../MiContexto";
import ItemListCarrito from "./ItemListCarrito";

const Cart = () => {
  const { carrito, removeItem, removeAll, calcularCantidad, calcularTotal } =
    useContext(miContexto);

  return (
    <div>
      {calcularCantidad() === 0 ? (
        <>
          <h3> Carrito vacio </h3>
          <Link className="btn botonesCounter" to="/" > Volver a comprar </Link>
        </>
      ) : (
        <>
          <h1> Tickets en el carrito </h1>
          <ItemListCarrito carrito={carrito} removeItem={removeItem} />
          <div className="container">
            <div className="row">
              <div className="col-md-6">
                <h3> Total: ${calcularTotal()} </h3>
              </div>
              <div className="col-md-6">
                <button
                  className="btn botonesCounter"
                  onClick={() => removeAll()}
                >
                  Vaciar carrito
                </button>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Cart;
