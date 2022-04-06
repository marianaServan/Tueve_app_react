import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import ItemDetail from './ItemDetail'
import { getEventsById } from "../dataBase/firebase";

const ItemDetailContainer = ({ titulo }) => {

    const [evento, setEvento] = useState([])
    const { eventid } = useParams()

    useEffect(() => {

      getEventsById(eventid)
      .then( respuesta => {setEvento(respuesta)})
      }, [eventid]) 

  return (
    <div>
        <h2>{titulo}</h2>
        <ItemDetail evento={evento} />
    </div>
  )
}

export default ItemDetailContainer