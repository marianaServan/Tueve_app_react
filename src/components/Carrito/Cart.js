import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { generateOrder } from "../../dataBase/firebase";
import { miContexto } from "../MiContexto";
import ItemListCarrito from "./ItemListCarrito";

const Cart = () => {
  const { carrito, removeItem, removeAll, calcularCantidad, calcularTotal } =
    useContext(miContexto);
  const [orderId, setOrderId] = useState(false);

  const handleSubmit = () => {
    removeAll();
    setOrderId("pending");

    const order = {
      buyer: {
        name: "Juan",
        lastName: "Perez",
        phone: "123456789",
        email: "juanperez@gmail.com",
      },
      items: [...carrito],
      total: calcularTotal(),
    };
    generateOrder(order).then((respuesta) => setOrderId(respuesta));
  };

  if (calcularCantidad() === 0) {
    return (
      <div>
        {orderId === "pending" && <p> Enviando orden </p>}
        {orderId && orderId !== "pending" && 
          <div>
            <h1>¡Gracias por tu compra!</h1>
            <p>Tu número de orden es: {orderId} </p>
            <Link className="btn botonesCounter" to="/">
              Volver al inicio
            </Link>
          </div>
        }
        {orderId === false && 
          <div>
            <h3> Carrito vacio </h3>
            <Link className="btn botonesCounter" to="/">
              Volver a comprar
            </Link>
          </div>
        }
      </div>
    );
  } else {
    return (
      <div>
        <h1> Tickets en el carrito </h1>
        <ItemListCarrito carrito={carrito} removeItem={removeItem} />

        <div className="container">
          <div className="row">

            <div className="col-md-6">
              <h3> Total: ${calcularTotal()} </h3>
            </div>

            <div className="col-md-3">
              <button className="btn botonesCounter" onClick={() => removeAll()} >
                Vaciar carrito
              </button>
            </div>

            <div className="col-md-3">
              <button className="btn botonesCounter" onClick={() => handleSubmit()} >
                Terminar compra
              </button>
            </div>

          </div>
        </div>
      </div>
    );
  }
};

export default Cart;
