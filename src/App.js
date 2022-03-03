/*
// import React from "react"

const App = () => "Hola mundo con App exportado"
// tengo que exportarlo para que sirva el import del index
export default App
*/

// rafce => plantilla basica de componente

import React from 'react'
import Header from "./components/Header"
import Main from "./components/Main"
import Footer from "./components/Footer"
import 'bootstrap/dist/css/bootstrap.min.css'


const App = () => {

    return (
        <>
            <Header/>
            <Main/>        
            <Footer />             
        </>
    )
}

export default App
