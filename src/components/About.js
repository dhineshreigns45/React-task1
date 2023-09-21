import React from 'react';
import Founder from '../assets/Founder.jpg'; 
import './About.css';
const About = () => {
  return (
    <div className="about">
      <h1>About Us</h1>
      <img src={Founder} alt="About Us" />
      <p className='p'>
      Nasim Mansurov is the founder of Photography Life. While he spent the majority of his adult life pursuing technology, he discovered photography as his true passion after the birth of his first child. Not happy with pictures from a point and shoot camera, Nasim decided to purchase a Nikon DSLR to preserve memories of his family and that's what started his journey into the world of digital photography. Today, Nasim is recognized as one of the leading educators in photography, conducting workshops, producing educational videos, and writing content for Photography Life. Nasim is married to Lola, his partner in life and the photography world.
      </p>
    </div>
  );
};

export default About;
