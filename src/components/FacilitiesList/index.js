import React from 'react';
import PropTypes from 'prop-types';
import './facilitiesList.css';

const FacilitiesList = ({ facilityItems }) => (
  <div className="facilities-list">
    <ul>
      {facilityItems.map((facilityItem, idx) => (
        <li key={`items-fac-${idx}`}>{facilityItem.facility_item}</li>
      ))}
    </ul>
  </div>
);

FacilitiesList.propTypes = {
  facilityItems: PropTypes.array, //eslint-disable-line
};
FacilitiesList.defaultProps = {
  facilityItems: [],
};

export default FacilitiesList;
