import React from "react";
import '../css/description.css';
import littlelemon from '../assets/littlelemon.jpg';
import littlelemon2 from '../assets/littlelemon2.jpg';

const Description = () => (
  <section className="description-container">
    <article className="description-text">
      <h1 className="description-title">Little Lemon</h1>
      <h3 className="description-subtitle">Chicago</h3>
      <p className="description-paragraph">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer at ex leo. Maecenas enim sem, laoreet at nulla ac, luctus scelerisque massa. Praesent ut molestie nisi. Aliquam arcu lorem, auctor condimentum blandit id, lobortis in nisi. Ut diam justo, euismod in accumsan id, vehicula sit amet tellus. Pellentesque porttitor elit lacus, vitae lacinia magna ultricies quis. Etiam vitae tellus et mi hendrerit consequat. In dictum ligula in elit euismod malesuada. Curabitur varius augue id tempus ultricies. Mauris suscipit porta odio, et pretium nibh scelerisque ut.</p>
    </article>

    <article className="description-images">
      <img className="description-image-1" src={littlelemon} alt="Little Lemon"></img>
      <img className="description-image-2" src={littlelemon2} alt="Little Lemon"></img>
    </article>
  </section>
);

export default Description;