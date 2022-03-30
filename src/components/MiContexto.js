import React, { createContext, useState } from "react";

export const miContexto = createContext()
const { Provider } = miContexto;

const MiProvider = ({children}) => {

    const [carrito, setCarrito] = useState([]);

    const addItem = (evento, cantidad) => {
        const copiaCarrito = [...carrito];
        const ticketAlCarrito = { ...evento, cantidad };

        if (yaExisteEnCarrito(evento.id)){
            let index = copiaCarrito.findIndex( item => item.id === evento.id);
            copiaCarrito[index].cantidad += cantidad;
            setCarrito(copiaCarrito);
        }else{
            copiaCarrito.push(ticketAlCarrito);
            setCarrito(copiaCarrito);
        }
    }

    const yaExisteEnCarrito = (id) => {
        return carrito.some( evento => evento.id === id);
    }

    const removeItem = (id) => {
        const copiaCarrito = [...carrito];
        const index = copiaCarrito.findIndex( item => item.id === id);
        copiaCarrito.splice(index, 1);
        setCarrito(copiaCarrito);
    }

    const removeAll = () => {
        setCarrito([]);
    }

    const calcularCantidad = () => {
        let cantidad = 0;
        carrito.forEach( item => cantidad += item.cantidad);
        return cantidad;
    }

    const calcularTotal = () => {
        let total = 0;
        carrito.forEach( item => total += item.cantidad * item.precio);
        return total;
    }

    const valorDelContexto = {
        carrito : carrito,
        addItem : addItem,
        removeItem : removeItem,
        removeAll : removeAll,
        calcularCantidad : calcularCantidad,
        calcularTotal : calcularTotal,
    }

    return (
        <Provider value={valorDelContexto}>
            {children}
        </Provider>
    )
}

export default MiProvider;