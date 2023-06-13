import React from 'react';
import { NavLink } from 'react-router-dom';
import { AiFillLeftSquare } from 'react-icons/ai';
import '../styles/navbar.scss';

const Navbar = () => {
  return (
    <header className="nav_bar">
      <div className="nav_left">
        <NavLink to="/">
          <p> <AiFillLeftSquare /> Home</p>
        </NavLink>
      </div>
      <h2 className='app-name' >Map with ME</h2>
    </header>
  );
};

export default Navbar;
