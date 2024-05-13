import React from 'react';
import '../../../css/Error404.css';
import error from '../../../assets/images/error/error.png'
import { Link } from 'react-router-dom';

const Error404 = () => {
  return (
    <div className="error-container">
      <div className="error-content">
        <div className="error-image">
          <img className='imageSize' src={error} alt="Lost Astronaut" />
        </div>
        <div className="error-text">
          <h1>404</h1>
          <h2>Page Not Found</h2>
          <p>Oops! Looks like you've stumbled upon a page that doesn't exist.</p>
          <Link to='/home'>
            <p>Let's get you back on track!</p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Error404;
