import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";
import ItemList from "./ItemList";
import { getAllEvents, getEventsByCategory } from "../dataBase/firebase";

const ItemListContainer = ({ greeting }) => {
  const [loading, setLoading] = useState(true);
  const [events, setEvents] = useState([]);
  const { categoryid } = useParams();

  useEffect(() => {
    toast.info("Trayendo eventos ...");

    if (categoryid) {
      getEventsByCategory(categoryid)
      .then( respuesta => {
        toast.dismiss();
        setEvents(respuesta)
      })
    } else {
      getAllEvents()
      .then( respuesta => setEvents(respuesta) ) 
    }

    setLoading(false);

    /* .then( (respuesta) => {
        toast.dismiss();
        setEvents(respuesta)
      })
      .catch((error) => {
        toast.error("Error al traer los eventos");
      })
      .finally(() => {
        setLoading(false);
      }); */

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
