import React from 'react'

const Main = (props) => {

    //console.log(props)
    //console.log(props.nombre)
    //console.log(props.edad)
    const {nombre, ciudad} = props

    return (
        <main>
            <h2> Bienvenido {nombre}! </h2>
            <p> Estás en {ciudad} </p>
        </main>
    );
}

export default Main;