import React from 'react';
import PropTypes from 'prop-types';
import './banner.css';

const Banner = ({ bannerImage }) => (
  <div className="banner">
    <img src={bannerImage} className="banner-image" alt="" />
  </div>
);

Banner.PropTypes = {
  bannerImage: PropTypes.string,
};

export default Banner;
