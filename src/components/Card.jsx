import React from 'react';
import { Link } from 'react-router-dom';

const Card = ({ item }) => {
  const { id, avatar, firstName, lastName, position } = item;
  return (
    <div className="card">
      <img className="avatar" src={avatar} alt="avatar" />
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolor.
      </p>
      <Link to={`/community/${id}`}>
        <small className="uppercase">
          {firstName} {lastName}
        </small>
      </Link>
      <p>{position}</p>
    </div>
  );
};

export default Card;
