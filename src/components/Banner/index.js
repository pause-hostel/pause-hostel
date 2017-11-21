import React from 'react';
import PropTypes from 'prop-types';
import './banner.css';

const Banner = ({ bannerImage }) => (
  <div className="banner">
    <img src={bannerImage} className="banner-image" alt="" />
    {bannerImage.button_text ? (
      <a className="book-button-page-header" href={bannerImage.button_url}>
        {bannerImage.button_text}
      </a>
    ) : null}
  </div>
);

Banner.PropTypes = {
  bannerImage: PropTypes.string,
};

export default Banner;
