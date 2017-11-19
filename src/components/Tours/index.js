import React from 'react';
import './tours.css';
import { tourContents } from './constants';

const Tours = ({ contents }) => {
  return (
    <div className="tour-container">
      {contents.map(content => (
        <div className="tour-wrapper">
          <img className="tour-image" src={content.src} alt="" />
          <div className="tour-title">{content.tourTitle}</div>
          <div className="tour-location">{content.tourLocation}</div>
          <div className="tour-description">{content.tourDescription}</div>
        </div>
      ))}
    </div>
  );
};

Tours.defaultProps = {
  contents: tourContents
};

export default Tours;
