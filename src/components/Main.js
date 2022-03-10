/* No lo uso por el momento - en cambio estoy usando el ItemListContainer*/

import React from 'react'
import ItemListContainer from './ItemListContainer'

const Main = (props) => {
    return (
        <main>
            <ItemListContainer greeting={"Bienvenidos a Tueve"} />
        </main>
    );
}

export default Main;