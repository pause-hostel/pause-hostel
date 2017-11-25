import React from 'react';
import { Link } from 'react-router-dom';
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
      <Link className="book-button-banner" to={bookButton.url}>
        {bookButton.title}
      </Link>
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
