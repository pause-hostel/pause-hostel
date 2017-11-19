import React from 'react';
import './tours.css';
import tourContents from './constants';

const Tours = ({ contents }) => (
  <div className="tour-container">
    {contents.map((content, idx) => (
      <div className="tour-wrapper" key={`tours-${idx}`}>
        <img className="tour-image" src={content.src} alt="" />
        <div className="tour-title">{content.tourTitle}</div>
        <div className="tour-location">{content.tourLocation}</div>
        <div className="tour-description">{content.tourDescription}</div>
      </div>
    ))}
  </div>
);

Tours.defaultProps = {
  contents: tourContents,
};

export default Tours;
