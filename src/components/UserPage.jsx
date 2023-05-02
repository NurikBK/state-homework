import React from 'react';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import NotFoundPage from './NotFoundPage';

const UserPage = () => {
  const { userId } = useParams();
  const communityData = useSelector((state) => state.community.data);

  const user = communityData?.find((item) => item.id === userId);

  if (!user) {
    return <NotFoundPage />;
  }

  return (
    <div className="container">
      <div className="card--community">
        <img className="avatar" src={user?.avatar} alt="avatar" />
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolor.
        </p>
        <small className="uppercase">
          {user?.firstName} {user?.lastName}
        </small>
        <p>{user?.position}</p>
      </div>
    </div>
  );
};

export default UserPage;
