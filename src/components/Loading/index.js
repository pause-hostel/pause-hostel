import React from 'react';
import './loading.css';

const LoadingWrapper = () => (
  <div className="loading-container">
    <div className="loading-wrapper">
      <img className="loadingIcon" src="/paw-icon.png" alt="Loading" />
      <div className="loadingText">Loading</div>
    </div>
  </div>
);

export default LoadingWrapper;
