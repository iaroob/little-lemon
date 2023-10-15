import React from "react";
import logo from '../assets/logo.png';
import {Link} from 'react-router-dom';

const Nav = () => (
  <nav className="nav-container">
    <img src={logo} alt="logo" className="nav-logo"/>
    <ul className="nav-links">
      <li><Link to="/" className="navlink">Home</Link></li>
      <li><a href="./">About</a></li>
      <li><a href="./">Menu</a></li>
      <li><Link to="/booking" className="navlink">Reservations</Link></li>
      <li><a href="./">Order online</a></li>
      <li><a href="./">Login</a></li>
    </ul>
  </nav>
);

export default Nav;