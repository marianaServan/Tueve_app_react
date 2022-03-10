import React from 'react'
import ItemCount from './ItemCount';

function Item({ producto }) {
    return (
        <div>
            <ItemCount producto={producto} initial={1} />
        </div>
    )
}

export default Item