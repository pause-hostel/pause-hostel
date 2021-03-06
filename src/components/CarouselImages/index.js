import React from 'react';
import PropTypes from 'prop-types';
import { Carousel } from 'react-responsive-carousel';

import './carousel.css';
import styles from 'react-responsive-carousel/lib/styles/carousel.min.css'; //eslint-disable-line

const CarouselImages = ({ galleryImages }) => (
  <Carousel autoPlay showThumbs={false} showStatus={false} infiniteLoop>
    {galleryImages.map(image => (
      <div key={`carouselImages-${image.id}`}>
        <img
          className="carousel-image"
          style={{ backgroundImage: `url(${image.url})` }}
          alt=""
        />
      </div>
    ))}
  </Carousel>
);

CarouselImages.propTypes = {
  galleryImages: PropTypes.array, //eslint-disable-line
};
CarouselImages.defaultProps = {
  galleryImages: [], //eslint-disable-line
};

export default CarouselImages;
