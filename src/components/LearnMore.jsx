import React from 'react';

const LearnMore = () => {
  return (
    <section className="learn-more container" id="learn-more">
      <h2>
        Learn more <br />
        about our culture...
      </h2>
      <div className="play-button">
        <svg
          className="ellips"
          width="145"
          height="144"
          viewBox="0 0 145 144"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <ellipse
            cx="72.5"
            cy="71.7342"
            rx="72.5"
            ry="71.7342"
            fill="#39C2D7"
          />
        </svg>
        <svg
          className="polygon"
          width="49"
          height="44"
          viewBox="0 0 49 44"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M47.2681 20.4314C48.8428 21.1382 48.8428 23.3739 47.2681 24.0807L3.4023 43.7694C2.079 44.3634 0.583334 43.3953 0.583334 41.9448L0.583336 2.56727C0.583336 1.11679 2.07901 0.148682 3.40231 0.742633L47.2681 20.4314Z"
            fill="white"
          />
        </svg>
      </div>
      <p className="subheading">
        Duis aute irure dolor in <br />
        reprehenderit in voluptate velit esse <br />
        cillum dolore eu fugiat nulla pariatur.
      </p>
    </section>
  );
};

export default LearnMore;
