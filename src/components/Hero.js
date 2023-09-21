import React from "react";
import "./Hero.css";

const Hero = ({ imageSrc }) => {
  return (
    <div className="home">
      <image src={imageSrc} alt="photo" className="home__image" />
      <h1 className="hero__title">Photo Graphy</h1>
      <p className="hero_para">A good photograph is one that is able to grab the attention of the viewer and bring out their emotions there is no secret recipe or a universal rule that can be applied to make a bad photograph look instantly better....</p>
    </div>
  );
};

export default Hero;
