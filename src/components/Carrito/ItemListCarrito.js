import React from 'react'
import ItemCarrito from './ItemCarrito'

const ItemListCarrito = ({carrito, removeItem}) => {
  return (
    <div>
      <div className="container">
        <div className="column">
          {carrito.map((item) => {
            return <ItemCarrito key={item.id} item={item} removeItem={removeItem} />;
          })}
        </div>
      </div>
    </div>
  )
}

export default ItemListCarrito