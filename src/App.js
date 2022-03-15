import React from 'react'
import Header from "./components/Header"
import ItemListContainer from './components/ItemListContainer'
import ItemDetailContainer from './components/ItemDetailContainer'
import Footer from "./components/Footer"
import 'bootstrap/dist/css/bootstrap.min.css'


const App = () => {

    return (
        <>
            <Header />
            <ItemListContainer greeting={"Bienvenidos a Tueve"} />
            <ItemDetailContainer titulo={"Detalle del producto"} id={2} />
            <Footer />
        </>
    )
}

export default App
