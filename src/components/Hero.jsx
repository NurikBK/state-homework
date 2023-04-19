import React from 'react';
import Logo from '../assets/logo.svg';

const Hero = () => {
  return (
    <section className="hero container">
      <img className="logo" src={Logo} alt="logo" />
      <h2>
        Your Headline <br />
        Here
      </h2>
      <p className="subheading">
        Lorem ipsum dolor sit amet, consectetur <br />
        adipiscing elit sed do eiusmod.
      </p>
    </section>
  );
};

export default Hero;
