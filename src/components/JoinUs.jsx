import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { subscribe, unsubscribe } from '../api/api';
import { setIsSubscribed, setIsDisabled } from '../features/joinUs/joinUsSlice';

const JoinUs = ({ title = 'Join Our Program', buttonTitle = 'Subscribe' }) => {
  const dispatch = useDispatch();
  const { isSubscribed, isDisabled } = useSelector((state) => state.joinUs);
  const [email, setEmail] = useState('');

  const handleSubscribe = async (action) => {
    dispatch(setIsDisabled(true)); 
    try {
      if (action === 'subscribe') {
        await subscribe(email);
        dispatch(setIsSubscribed(true));
      } else if (action === 'unsubscribe') {
        await unsubscribe(email);
        dispatch(setIsSubscribed(false));
      }
    } catch (error) {
      alert(error);
    }

    dispatch(setIsDisabled(false));
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
