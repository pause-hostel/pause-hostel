import React from 'react';
import { Carousel } from 'react-responsive-carousel';

import './carousel.css';
import styles from 'react-responsive-carousel/lib/styles/carousel.min.css'; //eslint-disable-line
import carouselImages from './constants';

const CarouselImages = ({ images }) => (
  <Carousel autoPlay showThumbs={false} showStatus={false} infiniteLoop>
    {images.map(image => (
      <div className="carousel-images" key={`carouselImages-${image.src}`}>
        <img src={image.src} alt="" />
      </div>
    ))}
  </Carousel>
);

CarouselImages.defaultProps = {
  images: carouselImages,
};

export default CarouselImages;
