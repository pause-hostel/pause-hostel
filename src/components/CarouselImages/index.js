import React from 'react';
import './carousel.css';
import styles from 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';
import { carouselImages } from './constants';

const CarouselImages = ({ images }) => {
  return (
    <Carousel
      autoPlay={true}
      showThumbs={false}
      showStatus={false}
      infiniteLoop={true}
    >
      {images.map(image => (
        <div className="carousel-images">
          <img src={image.src} alt="" />
        </div>
      ))}
    </Carousel>
  );
};

CarouselImages.defaultProps = {
  images: carouselImages
};

export default CarouselImages;
