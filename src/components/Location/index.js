import React from 'react';
import './location.css';
import locationContent from './constants';

const Location = ({ contents }) => (
  <div>
    {contents.map(content => (
      <div
        className="location-container"
        key={`location-${content.locationText}`}
      >
        <div className="directions-wrapper">
          <a className="directions-button" href={content.buttonHref}>
            {content.buttonText}
          </a>
          <div className="directions-location">{content.locationText}</div>
          <div className="directions-address">{content.addressText}</div>
          <div className="directions-description">
            {content.descriptionText}
          </div>
        </div>
        <iframe
          src={content.mapURL}
          width="550"
          height="300"
          frameBorder="0"
          allowFullScreen
          title="Hostel Map"
          alt=""
        />
      </div>
    ))}
  </div>
);

Location.defaultProps = {
  contents: locationContent,
};

export default Location;
