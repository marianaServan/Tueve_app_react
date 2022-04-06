import React, { useContext } from "react";
import CartWidget from "./CartWidget";
import { NavLink } from "react-router-dom";
import { miContexto } from "./MiContexto"

const Nav = () => {
  
  const { calcularCantidad } = useContext(miContexto);

  return (
    <div className="collapse navbar-collapse navDerecha">
      <ul className="navbar-nav">
        <li className="nav-item">
          <NavLink to="/Categoria/Musica" className="nav-item nav active">
            Música
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/Categoria/Teatro" className="nav-item nav active">
            Teatro
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/Categoria/Bailable" className="nav-item nav active">
            Bailable
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/HappyHours" className="nav-item nav">
            Happy Hours
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/Lugares" className="nav-item nav">
            Lugares
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/Carrito">
            <div className="carrito">
              <CartWidget />
              {calcularCantidad() !== 0 ? ( calcularCantidad() ) : null}
            </div>
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Nav;
