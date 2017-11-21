import React from 'react';
import PropTypes from 'prop-types';
import './facilitiesList.css';

const FacilitiesList = ({ facilityItems }) => (
  <div className="facilities-list">
    <ul>
      {Object.values(facilityItems).map(facilityItem => (
        <li>{facilityItem.facility_item}</li>
      ))}
    </ul>
  </div>
);

FacilitiesList.PropTypes = {
  facilityItems: PropTypes.object,
};

export default FacilitiesList;
