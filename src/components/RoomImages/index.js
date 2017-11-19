import React from 'react';
import './roomImages.css';
import roomImagesContents from './constants';
import { CONTACT_PAGE } from '../../routes';

const RoomImages = ({ contents }) => (
  <div className="room-container">
    {contents.map(content => (
      <div className="room-wrapper" key={`room-${content.src}`}>
        <img className="room-image" src={content.src} alt="" />
        {content.buttonText ? (
          <a className="book-button-room" href={CONTACT_PAGE}>
            {content.buttonText}
          </a>
        ) : null}
        <div className="room-type">{content.roomType}</div>
        {content.roomLocation ? (
          <div className="room-location">{content.roomLocation}</div>
        ) : null}
      </div>
    ))}
  </div>
);

RoomImages.defaultProps = {
  contents: roomImagesContents,
};

export default RoomImages;
