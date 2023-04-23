import React from 'react';

const Card = ({ item }) => {
  const { avatar, firstName, lastName, position } = item;
  return (
    <div className="card">
      <img className="avatar" src={avatar} alt="avatar" />
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolor.
      </p>
      <small className="uppercase">
        {firstName} {lastName}
      </small>
      <p>{position}</p>
    </div>
  );
};

export default Card;
