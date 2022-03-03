import React from 'react'
import ItemCount from './ItemCount'

function itemListContainer({ greeting }) {
  return (
    <div>
      <h1>{greeting}</h1>

      <h2> Productos </h2>
      <ItemCount stock={10} initial={1} />
    </div>
  )
}

export default itemListContainer