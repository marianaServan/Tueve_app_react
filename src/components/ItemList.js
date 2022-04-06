import React from "react";
import Item from "./Item";

function ItemList({ eventsList }) {
  return (
    <div className="listaDeEventos">
      <div className="container">
        <div className="row">
          {eventsList.map((event) => {
            return <Item key={event.id} event={event} />;
          })}
        </div>
      </div>
    </div>
  );
}

export default ItemList;
