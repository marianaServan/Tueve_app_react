import React from 'react'
import CartWidget from './CartWidget'
import { NavLink } from "react-router-dom"

const Nav = () => {
  return (
        <div className="collapse navbar-collapse navDerecha" >
          <ul className="navbar-nav">
            <li className="nav-item">
              <NavLink to="/Categoria/Musica" className='nav active'>Música</NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/Categoria/Teatro" className='nav active'>Teatro</NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/Categoria/Bailable" className='nav active'>Bailable</NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/HappyHours" className='nav'>Happy Hours</NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/Lugares" className='nav'>Lugares</NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/Carrito" > < CartWidget /> </NavLink>
            </li>
          </ul>
        </div>

  )
}

export default Nav