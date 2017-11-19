import React from 'react';
import './banner.css';
import bannerImage from './constants';

const Banner = ({ images }) => (
  <div>
    {images.map(image => (
      <div className="banner" key={`banner-${image.src}`}>
        <img src={image.src} className="banner-image" alt="" />
      </div>
    ))}
  </div>
);

Banner.defaultProps = {
  images: bannerImage,
};

export default Banner;
