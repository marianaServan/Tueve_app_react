import React from 'react'
import CartWidget from './CartWidget'

const Nav = () => {
  return (
        <div className="collapse navbar-collapse navDerecha" >
          <ul className="navbar-nav">
            <li className="nav-item">
              <a href="/" className='nav active'>Eventos</a>
            </li>
            <li className="nav-item">
              <a href="/" className='nav'>Happy Hours</a>
            </li>
            <li className="nav-item">
              <a href="/" className='nav'>Mapa</a>
            </li>
            <li className="nav-item">
              < CartWidget />
            </li>
          </ul>
        </div>

  )
}

export default Nav