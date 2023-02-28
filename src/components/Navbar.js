import React from 'react'
import { Link } from 'react-router-dom'
// Add logo here svg file

const Navbar = () => {
  return (
    <nav className='navbar'>
        <div className='nav-center'>
            <Link to='/'>
                {/* <img src={logo} alt='meal logo' className='logo'></img> */}
                <div>
                    <h2>TheMeal</h2>
                </div>
            </Link>
            <ul className='nav-links'>
                {/* Navigates to Home page */}
                <li>
                    <Link to='/'>
                        Home
                    </Link>
                </li>
                {/* Navigates to About page */}
                <li>
                    <Link to="about">
                        About
                    </Link>
                </li>
            </ul>
        </div>
    </nav>
  );
}

export default Navbar;