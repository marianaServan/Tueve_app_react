import React from 'react'
import Logo from '../img/logo.png'
import Nav from './Nav'

const Header = () => {
  return (
    <header id='leyout-header' className='header'>

      <nav className="navbar navbar-expand-lg navbar-expand-md">
        <div >
          <a className="navbar-brand" href="/">
            <img height="40" src={Logo} alt="Logo Tueve" />
          </a>
        </div>        
        <Nav />             
      </nav>     
    </header>
  )
}

export default Header