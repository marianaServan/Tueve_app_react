import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { useParams } from "react-router-dom";
import ItemList from "./ItemList";
import { getAllEvents, getEventsByCategory } from "../../dataBase/firebase";

const ItemListContainer = () => {
  const [loading, setLoading] = useState(true);
  const [events, setEvents] = useState([]);
  const { categoryid } = useParams();
  const [titulo, setTitulo] = useState("");

  async function getEvents(categoryid) {
    if (categoryid) {
      setTitulo('Categoría '+ categoryid);
      return getEventsByCategory(categoryid);
    } else {
      setTitulo('Bienvenidos a Tueve');
      return getAllEvents();
    }
  }

  useEffect(() => {

    getEvents(categoryid)
      .then((respuesta) => setEvents(respuesta))
      .catch(() =>
        toast.error("Error al cargar los eventos", {
          position: "top-center",
          autoClose: 1500,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
        })
      )
      .finally(() => setLoading(false));
      
  }, [categoryid]);

  if (loading) {
    return <h1> Cargando... </h1>;
  } else {
    return (
      <div>
        <h1> {titulo} </h1>

        <h2> Eventos </h2>
        <ItemList eventsList={events} />
      </div>
    );
  }
};

export default ItemListContainer;
