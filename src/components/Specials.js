import React from "react";
import '../css/specials.css';
import salad from '../assets/greek-salad.jpg';
import bruchetta from '../assets/bruchetta.svg';
import lemoncake from '../assets/lemon-cake.jpg';

const Specials = () => (
  <div className="specials-container">
    <section className="specials-header">
      <h1 className="specials-title">Specials</h1>
      <div className="specials-buttonArea">
        <button id="specials-button">Online Menu</button>
      </div>
    </section>
    <section className="specials-cards">
      <article className="specials-card">
      <img className="card-img" src={salad} alt="greek salad"></img>
        <div className="card-content">
        <h2 className="card-title">Greek salad</h2>
        <p className="card-text">The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons.</p>
        <h3 className="card-subtitle">Order a delivery</h3>
        </div>
      </article>

      <article className="specials-card">
      <img className="card-img" src={bruchetta} alt="bruchetta"></img>
        <div className="card-content">
          <h2 className="card-title">Bruchetta</h2>
          <p className="card-text">Our Bruschetta is made from homemade grilled bread that has been smeared with garlic and seasoned with salt and olive oil. Topped with fresh vegetables.</p>
          <h3 className="card-subtitle">Order a delivery</h3>
        </div>
      </article>

      <article className="specials-card">
      <img className="card-img" src={lemoncake} alt="lemon cake"></img>
        <div className="card-content">
        <h2 className="card-title">Lemon Cake</h2>
        <p className="card-text">This comes straight from grandma’s recipe book, every last ingredient has been sourced and is as authentic as can be imagined.</p>
        <h3 className="card-subtitle">Order a delivery</h3>
        </div>
      </article>
    </section>
  </div>
);

export default Specials;