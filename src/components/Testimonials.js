import React from "react";
import '../css/testimonials.css';

const Testimonials = () => (
  <div className="testimonials-container">
    <h1 className="testimonials-title">Testimonials</h1>
    <section className="testimonials-cards">
      <article className="testimonials-card">
      {/* <img className="card-img" src={salad} alt="greek salad"></img> */}
        <div className="card-content">
        <h2 className="card-title">Greek salad</h2>
        <p className="card-text">"Loved it"</p>
        </div>
      </article>

      <article className="testimonials-card">
      {/* <img className="card-img" src={bruchetta} alt="bruchetta"></img> */}
        <div className="card-content">
          <h2 className="card-title">Bruchetta</h2>
          <p className="card-text">"Loved it"</p>
        </div>
      </article>
      
      <article className="testimonials-card">
      {/* <img className="card-img" src={bruchetta} alt="bruchetta"></img> */}
        <div className="card-content">
          <h2 className="card-title">Bruchetta</h2>
          <p className="card-text">"Loved it"</p>
        </div>
      </article>

      <article className="testimonials-card">
      {/* <img className="card-img" src={lemoncake} alt="lemon cake"></img> */}
        <div className="card-content">
        <h2 className="card-title">Lemon Cake</h2>
        <p className="card-text">"Loved it"</p>
        </div>
      </article>
    </section>
  </div>
);

export default Testimonials;