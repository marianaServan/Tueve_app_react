import React from "react";
import { Route, Routes } from "react-router-dom";
import Cart from "./Carrito/Cart";
import ItemListContainer from "./ItemList/ItemListContainer";
import ItemDetailContainer from "./ItemDetail/ItemDetailContainer";

const Main = () => {
  return (
    <main className="pantallaCompleta">
      <Routes>
        <Route path="/" element={<ItemListContainer greeting={"Bienvenidos a Tueve"} />} />
        <Route path="/categoria/:categoryid" element={<ItemListContainer />} />
        <Route path="/evento/:eventid" element={<ItemDetailContainer titulo={"Detalle del evento"} />} />
        <Route path="/Carrito" element={<Cart />} />
      </Routes>
    </main>
  );
};

export default Main;
