import React from 'react';
import PropTypes from 'prop-types';
import './tours.css';

const Tours = ({ activityItems }) => (
  <div className="tour-container">
    {Object.values(activityItems).map(activity => (
      <div className="tour-wrapper" key={`tours-${activity.activity_title}`}>
        <div
          className="tour-image"
          style={{ backgroundImage: `url(${activity.activity_image})` }}
          alt=""
        />
        <div className="tour-title">{activity.activity_title}</div>
        <div className="tour-location">{activity.activity_subtitle}</div>
        <div className="tour-description">{activity.activity_summary}</div>
      </div>
    ))}
  </div>
);

Tours.propTypes = {
  activityItems: PropTypes.object, //eslint-disable-line
};
Tours.defaultProps = {
  activityItems: {}, //eslint-disable-line
};

export default Tours;
