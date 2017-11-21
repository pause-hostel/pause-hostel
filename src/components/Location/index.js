import React from 'react';
import PropTypes from 'prop-types';
import './location.css';

const Location = ({
  direction_button,
  hostel_location,
  hostel_address,
  hostel_directions,
  google_map_url,
}) => (
  <div>
    <div className="location-container">
      <div className="directions-wrapper">
        <a className="directions-button" href={direction_button.url}>
          {direction_button.title}
        </a>
        <div className="directions-location">{hostel_location}</div>
        <div className="directions-address">{hostel_address}</div>
        <div className="directions-description">{hostel_directions}</div>
      </div>
      <iframe
        src={google_map_url}
        width="550"
        height="300"
        frameBorder="0"
        allowFullScreen
        title="Hostel Map"
        alt=""
      />
    </div>
  </div>
);
Location.propTypes = {
  direction_button: PropTypes.object, //eslint-disable-line
  hostel_location: PropTypes.string,
  hostel_address: PropTypes.string,
  hostel_directions: PropTypes.string,
  google_map_url: PropTypes.string,
};
Location.defaultProps = {
  direction_button: {},
  hostel_location: '',
  hostel_address: '',
  hostel_directions: '',
  google_map_url: '',
};

export default Location;
