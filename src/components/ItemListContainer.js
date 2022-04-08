import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { useParams } from "react-router-dom";
import ItemList from "./ItemList";
import { getAllEvents, getEventsByCategory } from "../dataBase/firebase";

const ItemListContainer = ({ greeting }) => {
  const [loading, setLoading] = useState(true);
  const [events, setEvents] = useState([]);
  const { categoryid } = useParams();

  useEffect(() => {

    if (categoryid) {
      getEventsByCategory(categoryid)
      .then( respuesta => setEvents(respuesta))
      .catch(() => toast.error("Error al cargar los eventos"))
      .finally(() => setLoading(false));
    } else {
      getAllEvents()
      .then( respuesta => setEvents(respuesta) ) 
      .catch(() => toast.error("Error al cargar los eventos"))
      .finally(() => setLoading(false));
    }

  }, [categoryid]);

  if (loading) {
    return <h1> Cargando... </h1>;
  } else {
    return (
      <div>
        <h1>{greeting}</h1>

        <h2> Eventos </h2>
        <ItemList eventsList={events} />
      </div>
    );
  }
};

export default ItemListContainer;
