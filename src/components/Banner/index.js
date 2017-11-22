import React from 'react';
import PropTypes from 'prop-types';
import './banner.css';

const Banner = ({ bannerImage, bookButton }) => (
  <div className="banner">
    <div
      className="banner-image"
      style={{ backgroundImage: `url(${bannerImage})` }}
      alt=""
    />
    {bookButton.title ? (
      <a className="book-button-banner" href={bookButton.url}>
        {bookButton.title}
      </a>
    ) : null}
  </div>
);

Banner.propTypes = {
  bannerImage: PropTypes.string,
  bookButton: PropTypes.object, //eslint-disable-line
};
Banner.defaultProps = {
  bannerImage: '',
  bookButton: {}, //eslint-disable-line
};

export default Banner;
