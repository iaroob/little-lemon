import React from 'react';
import '../App.css';
import Main from './Main';
import About from './About';
import Specials from './Specials';
import Testimonials from './Testimonials';
import Description from './Description';

const Home = () => (
  <div>
    <Main>
      <About></About>
      <Specials></Specials>
      <Testimonials></Testimonials>
      <Description></Description>
    </Main>
  </div>
);

export default Home;