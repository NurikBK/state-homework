import React, { useState } from 'react';
import { subscribe, unsubscribe } from '../api/api';

const JoinUs = ({ title = 'Join Our Program', buttonTitle = 'Subscribe' }) => {
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [isDisabled, setIsDisabled] = useState(false);
  const [email, setEmail] = useState('');

  const handleSubscribe = async (action) => {
    setIsDisabled(true); // Disable the button to prevent multiple clicks

    try {
      if (action === 'subscribe') {
        await subscribe(email);
        setIsSubscribed(true);
      } else if (action === 'unsubscribe') {
        await unsubscribe(email);
        setIsSubscribed(false);
      }
    } catch (error) {
      alert(error);
    }

    setIsDisabled(false); // Enable the button again
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleSubscribe(isSubscribed ? 'unsubscribe' : 'subscribe');
  };

  return (
    <section className="container join-us">
      <h2>{title}</h2>
      <p className="subheading">
        Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
      </p>
      <form onSubmit={handleSubmit}>
        {!isSubscribed && (
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        )}
        <button
          className="btn"
          type="submit"
          style={{ opacity: isDisabled ? '0.5' : '1' }}
          disabled={isDisabled}
        >
          {isSubscribed ? 'Unsubscribe' : buttonTitle}
        </button>
      </form>
    </section>
  );
};

export default JoinUs;
