import React from 'react'
import Nav from './Nav'
import Logo from '../img/logo.png'
import { Link } from "react-router-dom"

const Header = () => {
  return (
    <header id='leyout-header' className='header'>

      <nav className="navbar navbar-expand-lg navbar-expand-md">
        <div >
          <Link className="navbar-brand" to="/">
            <img height="40" src={Logo} alt="Logo Tueve" />
          </Link>
        </div>        
        <Nav />             
      </nav>     
    </header>
  )
}

export default Header