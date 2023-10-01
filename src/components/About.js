import React from "react";
import restaurant from '../assets/restaurant2.jpg';
import '../css/about.css';

const About = () => (
  <div className="about-container">
    <div className="about-info">
    <h1 id="about-title">Little Lemon</h1>
    <h2 id="about-subtitle">Chicago</h2>
    <h5 id="about-text">We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.</h5>
    <a href='./' id="about-button">Reserve a table</a>
  </div>
    <img className="about-photo" src={restaurant} alt="restaurant"></img>
  </div>
);

export default About;