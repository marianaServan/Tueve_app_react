import React from "react";
import { Link } from "react-router-dom";

function Item({ event }) {
  return (
    <div className="col col-lg-3">
        <div className="card" style={{ maxWidth: "20rem" }}>
          <div className="card-body">
            <img src={event.imagen} alt="" style={{ maxWidth: "14rem" }} />
            <h5 className="card-title"> {event.nombre} </h5>
            <p className="card-text">Descripción del evento</p>
            <button className="btn botonesCounter">
              <Link to={`/evento/${event.id}`}> Ver más </Link>
            </button>
          </div>
        </div>
      </div>
  );
}

export default Item;
