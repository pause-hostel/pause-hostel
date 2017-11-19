import React from 'react';
import './roomImages.css';
import { roomImagesContents } from './constants';

const RoomImages = ({ contents }) => {
  return (
    <div className="room-container">
      {contents.map(content => (
        <div>
          <img className="room-image" src={content.src} alt="" />
          <div className="room-type">{content.roomType}</div>
          <div className="room-location">{content.roomLocation}</div>
        </div>
      ))}
    </div>
  );
};

RoomImages.defaultProps = {
  contents: roomImagesContents
};

export default RoomImages;
