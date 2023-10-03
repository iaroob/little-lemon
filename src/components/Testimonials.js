import React from "react";
import '../css/testimonials.css';
import person1 from '../assets/person1.jpg';
import person2 from '../assets/person2.jpg';
import person3 from '../assets/person3.jpg';
import person4 from '../assets/person4.jpg';

const Testimonials = () => (
  <div className="testimonials-container">
    <h1 className="testimonials-title">Testimonials</h1>
    <section className="testimonials-cards">
      <article className="testimonials-card">
      <img className="t-card-img" src={person1} alt="Person"></img>
        <div className="t-card-content">
          <h2 className="t-card-title">Selena G.</h2>
          <p className="t-card-text">"Really enjoyed the atmosphere."</p>
        </div>
        <div className="stars-rating">
          <span class="fa fa-star checked"></span>
          <span class="fa fa-star checked"></span>
          <span class="fa fa-star checked"></span>
          <span class="fa fa-star checked"></span>
          <span class="fa fa-star checked"></span>
        </div>
      </article>

      <article className="testimonials-card">
      <img className="t-card-img" src={person2} alt="Person"></img>
        <div className="t-card-content">
          <h2 className="t-card-title">Peter M.</h2>
          <p className="t-card-text">"The greek salad was excellent!"</p>
        </div>
        <div className="stars-rating">
          <span class="fa fa-star checked"></span>
          <span class="fa fa-star checked"></span>
          <span class="fa fa-star checked"></span>
          <span class="fa fa-star checked"></span>
          <span class="fa fa-star checked"></span>
        </div>
      </article>

      <article className="testimonials-card">
      <img className="t-card-img" src={person3} alt="Person"></img>
        <div className="t-card-content">
            <h2 className="t-card-title">Alex R.</h2>
            <p className="t-card-text">"You have to try the Greek Salad!"</p>
        </div>
        <div className="stars-rating">
          <span class="fa fa-star checked"></span>
          <span class="fa fa-star checked"></span>
          <span class="fa fa-star checked"></span>
          <span class="fa fa-star checked"></span>
          <span class="fa fa-star checked"></span>
        </div>
      </article>

      <article className="testimonials-card">
      <img className="t-card-img" src={person4} alt="Person"></img>
        <div className="t-card-content">
          <h2 className="t-card-title">Brandon J.</h2>
          <p className="t-card-text">"Loved it"</p>
        </div>
        <div className="stars-rating">
          <span class="fa fa-star checked"></span>
          <span class="fa fa-star checked"></span>
          <span class="fa fa-star checked"></span>
          <span class="fa fa-star checked"></span>
          <span class="fa fa-star checked"></span>
        </div>
      </article>
    </section>
  </div>
);

export default Testimonials;