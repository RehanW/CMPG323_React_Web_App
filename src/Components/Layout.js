import React, { useState, useEffect } from 'react';
import { Button } from './Button';
import { Link } from 'react-router-dom';
import './Layout.css';

function Layout(){
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  return(
    <>
      <nav className="navbar">
        <div className="navbar-container">
          <Link to="/" className="navbara-logo">
            TRVL
          </Link>
          <div className='menu-icon' onClick = {handleClick}>
            
          </div>
          <ul className= {click ? 'nav-menu active' : 'nav-menu'}>
            <li className='nav-itemn'>
              <Link to= '/home' className='nav-links' onClick= {closeMobileMenu}>
                Home
              </Link>
            </li>
            <li className='nav-itemn'>
              <Link to= '/services' className='nav-links' onClick= {closeMobileMenu}>
                Services
              </Link>
            </li>
            <li className='nav-itemn'>
              <Link to= '/sign-up' className='nav-links' onClick= {closeMobileMenu}>
                Sign Up
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  )
}

export default Navbar