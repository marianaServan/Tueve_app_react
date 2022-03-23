import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";
import ItemList from "./ItemList";
import products from "../dataBase/products.js";
/*import { TruckFlatbed } from "react-bootstrap-icons";*/

function pedidoPorCategoria(categoriaid) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (categoriaid === undefined) {
        resolve(products);
      } else {
        const encontrados = products.filter(function (itemIterado) {
          return itemIterado.categoria === categoriaid;
        });
        resolve(encontrados);
      }
      }, 2000);
    });
}

function ItemListContainer({ greeting }) {
  const [loading, setLoading] = useState(true);
  const [eventos, seteventos] = useState([]);
  const { categoriaid } = useParams();

  useEffect(() => {
    toast.info("Trayendo eventos ...");

    pedidoPorCategoria(categoriaid)
      .then((resultado) => {
        toast.dismiss();
        seteventos(resultado);
      })
      .catch((error) => {
        toast.error("Error al traer los eventos");
      })
      .finally(() => {
        setLoading(false);
      });
  }, [categoriaid]);

  if (loading) {
    return <h1> Cargando... </h1>;
  } else {
    return (
      <div>
        <h1>{greeting}</h1>

        <h2> Eventos </h2>
        <ItemList eventosAListar={eventos} />
      </div>
    );
  }
}

export default ItemListContainer;
