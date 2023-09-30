import React from "react";
import logo from '../assets/logo.svg';

const Nav = () => (
  <nav>
    <img src={logo} alt="logo"/>
    <ul>
      <li><a href="./">Home</a></li>
      <li><a href="./">About</a></li>
      <li><a href="./">Menu</a></li>
      <li><a href="./">Reservations</a></li>
      <li><a href="./">Order online</a></li>
      <li><a href="./">Login</a></li>
    </ul>
  </nav>
);

export default Nav;