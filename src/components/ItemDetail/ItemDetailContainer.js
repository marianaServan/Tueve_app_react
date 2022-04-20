import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { useParams } from "react-router-dom";
import ItemDetail from "./ItemDetail";
import { getEventsById } from "../../dataBase/firebase";

const ItemDetailContainer = ({ titulo }) => {
  const [loading, setLoading] = useState(true);
  const [evento, setEvento] = useState([]);
  const { eventid } = useParams();

  useEffect(() => {

    getEventsById(eventid)
      .then((respuesta) => {
        setEvento(respuesta);
      })
      .catch(() => toast.error('Error al cargar los eventos', {
        position: "top-center",
        autoClose: 1500,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        }))
      .finally(() => setLoading(false));
      
  }, [eventid]);

  if (loading) {
    return <h1> Cargando... </h1>;
  } else {
    return (
      <div>
        <h2>{titulo}</h2>
        <ItemDetail evento={evento} />
      </div>
    );
  }
};

export default ItemDetailContainer;
