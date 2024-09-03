import React from 'react'
import {Link, NavLink} from "react-router-dom";
import Logo from '../assets/logo.jpeg';

function Header() {
  return (
    <div>
      <header>
        <Link to="/" className='logo' >
            <img src={Logo} alt="this is a logo"/>
            <span>Routemate</span>
        </Link>

        <nav className='navigation'>
            <NavLink to="/" className="link">Home</NavLink>
            <NavLink to="/products" className="link">Products</NavLink>
            <NavLink to="/contact" className="link">Contact</NavLink>
        </nav>
      </header>
    </div>
  )
}

export default Header
