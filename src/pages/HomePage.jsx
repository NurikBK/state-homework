import React from 'react';
import Hero from '../components/Hero';
import JoinUs from '../components/JoinUs';
import LearnMore from '../components/LearnMore';
import Article from '../components/Article';

const HomePage = () => {
  return (
    <>
      <Hero />
      <Article />
      <LearnMore />
      <JoinUs />
    </>
  );
};

export default HomePage;
