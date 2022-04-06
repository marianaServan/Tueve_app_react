import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import ItemDetail from './ItemDetail'
import { getEventsById } from "../dataBase/firebase";

/* function pedidoDetalle(eventid) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const encontrado = products.find( function(itemIterado){
        return (itemIterado.id === Number(eventid) );
      })
      resolve(encontrado)
    }, 2000)
  })
} */

const ItemDetailContainer = ({ titulo }) => {

    const [evento, setEvento] = useState([])
    const { eventid } = useParams()

    useEffect(() => {

      getEventsById(eventid)
      .then( respuesta => {setEvento(respuesta)})

      /* pedidoDetalle(eventid)
          .then((resultado) => {
            console.log("Estuvo bien")
            setEvento(resultado)
          })
          .catch((error) => {
            console.log("Estuvo mal")
          })*/
      }, [eventid]) 

  return (
    <div>
        <h2>{titulo}</h2>
        <ItemDetail evento={evento} />
    </div>
  )
}

export default ItemDetailContainer