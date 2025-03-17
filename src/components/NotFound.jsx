import React from 'react';
import './NotFound.css';

const NotFound = () => {
  return (
    <div className="not-found-container">
      <div className="not-found-content">
        <h1 className="not-found-title">404</h1>
        <div className="not-found-divider"></div>
        <h2 className="not-found-subtitle">Page Not Found</h2>
        <p className="not-found-message">
          The page you are looking for might have been removed, had its name changed, 
          or is temporarily unavailable.
        </p>
        <button className="not-found-button" onClick={() => window.location.href = '/'}>
          Return Home
        </button>
      </div>
    </div>
  );
};

export default NotFound;