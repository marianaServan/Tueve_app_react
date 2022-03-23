import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import ItemDetail from './ItemDetail'
import products from '../dataBase/products.js';

function pedidoDetalle(eventoid) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const encontrado = products.find( function(itemIterado){
        return (itemIterado.id === Number(eventoid) );
      })
      resolve(encontrado)
    }, 2000)
  })
}

const ItemDetailContainer = ({ titulo }) => {

    const [evento, setEvento] = useState([])
    const { eventoid } = useParams()

    useEffect(() => {
      pedidoDetalle(eventoid)
          .then((resultado) => {
            console.log("Estuvo bien")
            setEvento(resultado)
          })
          .catch((error) => {
            console.log("Estuvo mal")
          })
      }, [eventoid])

  return (
    <div>
        <h2>{titulo}</h2>
        <ItemDetail evento={evento} />
    </div>
  )
}

export default ItemDetailContainer