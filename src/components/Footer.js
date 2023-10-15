import React from "react";
import logo from '../assets/logo.png';
import '../css/footer.css';

const Footer = () => (
  <footer className="footer-container">
      <section className="footer-logo">
        <img src={logo} alt="logo"/>
      </section>
      <section className="footer-nav">
        <h1>Navigation</h1>
        <article className="footer-text">
          <p>Home</p>
          <p>About</p>
          <p>Menu</p>
          <p>Reservations</p>
          <p>Order Online</p>
          <p>Login</p>
        </article>
      </section>
      <section className="footer-contact">
        <h1>Contact</h1>
        <article className="footer-text">
          <p><i class="bi bi-telephone-x"></i></p>
          <p><i class="bi bi-envelope-at"></i></p>
          <p><i class="bi bi-geo-alt"></i></p>
        </article>
      </section>
      <section className="footer-socials">
        <h1>Socials</h1>
        <article className="footer-text">
          <p><i class="bi bi-instagram"></i></p>
          <p><i class="bi bi-facebook"></i></p>
          <p><i class="bi bi-pinterest"></i></p>
        </article>
      </section>
  </footer>
);

export default Footer;