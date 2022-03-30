import React from "react";
import { Route, Routes } from "react-router-dom";
import Cart from "./Carrito/Cart";
import ItemListContainer from "./ItemListContainer";
import ItemDetailContainer from "./ItemDetailContainer";

const Main = () => {
  return (
    <main className="pantallaCompleta">
      <Routes>
        <Route path="/" element={<ItemListContainer greeting={"Bienvenidos a Tueve"} />} />
        <Route path="/categoria/:categoriaid" element={<ItemListContainer greeting={`Categoría`} />} />
        <Route path="/evento/:eventoid" element={<ItemDetailContainer titulo={"Detalle del evento"} />} />
        <Route path="/Carrito" element={<Cart />} />
      </Routes>
    </main>
  );
};

export default Main;
