import React from 'react';
import { pawImage } from '../../images';

import './loading.css';

const LoadingWrapper = () => (
  <div className="loading-container">
    <div className="loading-wrapper">
      <img className="loadingIcon" src={pawImage} alt="Loading" />
      <div className="loadingText">Loading</div>
    </div>
  </div>
);

export default LoadingWrapper;
