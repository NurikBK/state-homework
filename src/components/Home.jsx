import React from 'react';
import Hero from './Hero';
import JoinUs from './JoinUs';
import LearnMore from './LearnMore';
import Article from './Article';

const Home = () => {
  return (
    <main>
      <Hero />
      <Article />
      <LearnMore />
      <JoinUs />
    </main>
  );
};

export default Home;
