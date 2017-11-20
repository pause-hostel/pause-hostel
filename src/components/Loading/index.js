import React from 'react';
import './loading.css';

const LoadingWrapper = () => (
  <div className="loading-container">
    <img className="loadingIcon" src="/paw-icon.png" alt="Loading" />
    <div className="loadingText">Loading...</div>
  </div>
);

export default LoadingWrapper;
