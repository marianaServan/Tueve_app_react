import React, { useEffect, useState } from 'react'
import ItemList from './ItemList'

let productosIniciales = [
  {
    id: 1,
    nombre: "Producto 1",
    precio: 100,
    descripcion: "Info sobre el producto 1",
    imagen: "../img/ev1",
    stock: 10
  },
  {
    id: 2,
    nombre: "Producto 2",
    precio: 200,
    descripcion: "Info sobre el producto 2",
    imagen: "../img/ev2",
    stock: 20
  },
  {
    id: 3,
    nombre: "Producto 3",
    precio: 300,
    descripcion: "Info sobre el producto 3",
    imagen: "../img/ev3",
    stock: 5
  },
  {
    id: 4,
    nombre: "Producto 4",
    precio: 400,
    descripcion: "Info sobre el producto 4",
    imagen: "../img/ev4",
    stock: 15
  }
]

const pedido = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(productosIniciales)
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