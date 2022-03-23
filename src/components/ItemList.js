import React from "react";
import Item from "./Item";

function ItemList({ eventosAListar }) {
  return (
    <div className="listaDeEventos">
      <div className="container">
        <div className="row">
          {eventosAListar.map((evento) => {
            return <Item key={evento.id} evento={evento} />;
          })}
        </div>
      </div>
    </div>
  );
}

export default ItemList;
