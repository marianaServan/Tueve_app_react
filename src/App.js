/*
// import React from "react"

const App = () => "Hola mundo con App exportado"
// tengo que exportarlo para que sirva el import del index
export default App
*/

// rafce => plantilla basica de componente

import React from 'react'
import Header from "./components/Header"
import ItemListContainer from './components/ItemListContainer'
import Footer from "./components/Footer"
import 'bootstrap/dist/css/bootstrap.min.css'


const App = () => {

    return (
        <>
            <Header />
            <ItemListContainer greeting={"Bienvenidos a Tueve"} />
            <Footer />
        </>
    )
}

export default App
