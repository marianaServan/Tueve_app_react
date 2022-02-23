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


const App = () => {
    
    /*const persona = {
         nombre: "Juan",
         edad:"32"
    */

    return (
        <>
            <Header />
            <Main nombre="Mariana" ciudad="Santa Fe"/>
            {/*<Main nombre={persona.nombre} edad={persona.edad}/>*/}
            {/*<Main persona={persona} />*/}
            <Footer />            
        </>
    )
}

export default App
