import React from 'react';
import { Link } from 'react-router-dom';

const NotFoundPage = () => {
  return (
    <div className="not-found">
      <h2 className="heading">Page Not Found</h2>
      <p className="subheading">
        Looks like you've followed a broken link or entered URL that dosen't
        exist on this site
      </p>
      <Link to="/">&larr; Back to our site</Link>
    </div>
  );
};

export default NotFoundPage;
