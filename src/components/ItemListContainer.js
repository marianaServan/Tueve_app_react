import React, { useEffect, useState } from 'react'
import ItemList from './ItemList'
import products from '../dataBase/products.js'

console.log(products)

const pedido = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(products)
  }, 2000)
})

function ItemListContainer({ greeting }) {

  const [productos, setProductos] = useState([])

  useEffect(() => {

    pedido
      .then((resultado) => {
        console.log("Estuvo bien")
        setProductos(resultado)
      })
      .catch((error) => {
        console.log("Estuvo mal")
      })
  }, [])

  return (
    <div className="pantallaCompleta">

      <h1>{greeting}</h1>

      <h2> Productos </h2>
      <ItemList productosAListar={productos} />


    </div>
  )
}

export default ItemListContainer