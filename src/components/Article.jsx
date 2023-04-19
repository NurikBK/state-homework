import React from 'react';

const Article = () => {
  return (
    <section className="article container">
      <h2>
        This is the Section Headline,
        <br />
        Continues to Two Lines
      </h2>
      <p className="subheading">
        Lorem ipsum dolor sit amet consectetur <br />
        adipisicing elit. Officia, voluptas.
      </p>
      <article className="wrapper">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum. Sed ut
          perspiciatis unde omnis.
        </p>
        <p>
          Minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </p>
      </article>
      <button className="btn">Read more</button>
    </section>
  );
};

export default Article;
