import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toggleIsHidden } from '../features/community/communitySlice';

const Community = () => {
  const [communityData, setCommunityData] = useState([]);
  const dispatch = useDispatch();
  const isHidden = useSelector((state) => state.community.isHidden);

  useEffect(() => {
    const url = 'http://localhost:3000/community';
    try {
      getCommunityData(url);
    } catch (error) {
      alert(error);
    }
  }, []);

  async function getCommunityData(url) {
    const res = await fetch(url, {
      method: 'GET',
      mode: 'cors',
      cache: 'no-cache',
      credentials: 'same-origin',
      headers: {
        'Content-Type': 'application/json',
      },
      redirect: 'follow',
      referrerPolicy: 'no-referrer',
    });
    const data = await res.json();
    setCommunityData(data);
  }

  const handleClick = () => {
    dispatch(toggleIsHidden(isHidden));
  };

  return (
    <section className="container community">
      <div className="community__container">
        <div>
          <h2>
            Big Community of <br />
            People Like You
          </h2>
          <p className="subheading">
            We’re proud of our products, and we’re really excited <br />
            when we get feedback from our users.
          </p>
        </div>
        <button className="community__btn" type="button" onClick={handleClick}>
          {isHidden ? 'Hide' : 'Show'} section
        </button>
      </div>

      {isHidden && (
        <div className="wrapper">
          {communityData.map((item) => (
            <div className="card" key={item.id}>
              <img className="avatar" src={item.avatar} alt="avatar" />
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolor.
              </p>
              <small className="uppercase">
                {item.firstName} {item.lastName}
              </small>
              <p>{item.position}</p>
            </div>
          ))}
        </div>
      )}
    </section>
  );
};

export default Community;
