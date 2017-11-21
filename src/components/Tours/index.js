import React from 'react';
import PropTypes from 'prop-types';
import './tours.css';

const Tours = ({ activityItems }) => (
  <div className="tour-container">
    {Object.values(activityItems).map(activity => (
      <div className="tour-wrapper" key={`tours-${activity.activity_title}`}>
        <img className="tour-image" src={activity.activity_image} alt="" />
        <div className="tour-title">{activity.activity_title}</div>
        <div className="tour-location">{activity.activity_subtitle}</div>
        <div className="tour-description">{activity.activity_summary}</div>
      </div>
    ))}
  </div>
);

Tours.PropTypes = {
  activityItems: PropTypes.object,
};

export default Tours;
