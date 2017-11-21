import React from 'react';
import PropTypes from 'prop-types';
import { Carousel } from 'react-responsive-carousel';

import './carousel.css';
import styles from 'react-responsive-carousel/lib/styles/carousel.min.css'; //eslint-disable-line

const CarouselImages = ({ galleryImages }) => (
  <Carousel autoPlay showThumbs={false} showStatus={false} infiniteLoop>
    {Object.values(galleryImages).map(image => (
      <div className="carousel-images" key={`carouselImages-${image.id}`}>
        <img src={image.url} alt="" />
      </div>
    ))}
  </Carousel>
);

CarouselImages.PropTypes = {
  galleryImages: PropTypes.object,
};

export default CarouselImages;
