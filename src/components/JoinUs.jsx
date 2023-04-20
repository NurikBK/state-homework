import React, { useState } from 'react';

import { subscribe, unsubscribe } from '../api/api';

const JoinUs = ({ title = 'Join Our Program', buttonTitle = 'Subscribe' }) => {
  const [isSubcribed, setIsSubcribed] = useState(false);
  const [isDisabled, setIsDisabled] = useState(false);

  const [email, setEmail] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    setIsDisabled((prevState) => !prevState);

    if (!isSubcribed) {
      try {
        await subscribe(email);
        setIsSubcribed((prevState) => !prevState);
        setIsDisabled((prevState) => !prevState);
      } catch (error) {
        alert(error);
      }
    } else {
      await unsubscribe(email);
      setIsSubcribed((prevState) => !prevState);
      setIsDisabled((prevState) => !prevState);
    }
  };

  return (
    <section className="container join-us">
      <h2>{title}</h2>
      <p className="subheading">
        Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
      </p>
      <form onSubmit={handleSubmit}>
        {!isSubcribed && (
          <input
            // change type
            type="text"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        )}
        <button
          className="btn"
          type="submit"
          style={isDisabled ? { opacity: '0.5' } : { opacity: '1' }}
          disabled={isDisabled}
        >
          {!isSubcribed ? buttonTitle : 'Unsubcribe'}
        </button>
      </form>
    </section>
  );
};

export default JoinUs;
