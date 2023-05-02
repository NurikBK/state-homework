import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Card from '../components/Card';
import {
  fetchCommunityData,
  setIsHidden,
} from '../features/community/communitySlice';

const CommunityPage = () => {
  const dispatch = useDispatch();
  const { isHidden } = useSelector((state) => state.community);
  const communityData = useSelector((state) => state.community.data);
  const communityStatus = useSelector((state) => state.community.status);
  const communityError = useSelector((state) => state.community.error);

  useEffect(() => {
    dispatch(fetchCommunityData());
  }, [dispatch]);

  if (communityStatus === 'loading') {
    return <div>Loading...</div>;
  }

  if (communityStatus === 'failed') {
    return <div>{communityError}</div>;
  }

  return (
    <main className="container community">
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
          onClick={() => dispatch(setIsHidden(!isHidden))}
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
    </main>
  );
};

export default CommunityPage;
