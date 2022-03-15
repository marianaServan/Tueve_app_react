import React, { useEffect, useState } from 'react'
import ItemDetail from './ItemDetail'
import products from '../dataBase/products.js'

function pedidoDetalle(id) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const encontrado = products.find( function(itemIterado){
        return (itemIterado.id === id);
      })
      resolve(encontrado)
    }, 2000)
  })
}

const ItemDetailContainer = ({ titulo, id }) => {

    const [producto, setProducto] = useState([])

    useEffect(() => {
      pedidoDetalle(id)
          .then((resultado) => {
            console.log("Estuvo bien")
            setProducto(resultado)
          })
          .catch((error) => {
            console.log("Estuvo mal")
          })
      }, [])

  return (
    <div>
        <h2>{titulo}</h2>
        <ItemDetail producto={producto} />
    </div>
  )
}

export default ItemDetailContainer