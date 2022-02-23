// 1) necesitamos la variable React en scope
/*ES6 Module: import React from "react" 
crea una variable React con todo lo que tiene adentro de "react"
va a ir a node modules a ver todo lo que hay en dependencia react
y va a revisar el index, si tiene algo que se importa lo obtiene
*/
// Common JS : const React = require("react")

import React from "react"

// 2) necesitamos la variable ReactDOM en scope
import ReactDOM from "react-dom"

// 3) necesitamos un componente en scope

/*
function App () {
    return "Hola mundo"
} */

//const App = () => "Hola mundo flecha resumida"
import App from "./App.js" 
// le pongo exactamente donde está para que no vaya a buscarlo 
// a node modules

// para importar estilo
import "./estilo.css"

// 4) necesitamos poner el componente en el DOM
ReactDOM.render(<App/>, document.getElementById("root"))
