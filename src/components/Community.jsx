import React, { useEffect, useState } from 'react';
import Card from './Card';

const Community = () => {
  const [communityData, setCommunityData] = useState([]);
  const [isHidden, setIsHidden] = useState(false);

  useEffect(() => {
    const fetchCommunityData = async () => {
      try {
        const res = await fetch('http://localhost:3000/community', {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          },
        });

        if (!res.ok) {
          throw new Error('Unable to fetch community data');
        }

        const data = await res.json();
        setCommunityData(data);
      } catch (error) {
        alert(error);
      }
    };

    fetchCommunityData();
  }, []);

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
        <button
          className="community__btn"
          type="button"
          onClick={() => setIsHidden(!isHidden)}
        >
          {isHidden ? 'Hide' : 'Show'} section
        </button>
      </div>

      {isHidden && (
        <div className="wrapper">
          {communityData?.map((item) => (
            <Card item={item} key={item.id} />
          ))}
        </div>
      )}
    </section>
  );
};

export default Community;
