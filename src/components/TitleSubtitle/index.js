import React from 'react';
import PropTypes from 'prop-types';
import './titlesubtitle.css';

const TitleSubtitle = ({ titleText, subtitleText }) => (
  <div className="title-container">
    <div key={`titleSubtitle-${titleText}`}>
      <div className="section-heading">{titleText}</div>
      <div className="section-subheading">{subtitleText}</div>
    </div>
  </div>
);

TitleSubtitle.PropTypes = {
  titleText: PropTypes.string,
  subtitleText: PropTypes.string,
};

export default TitleSubtitle;
