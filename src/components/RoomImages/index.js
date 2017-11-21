import React from 'react';
import PropTypes from 'prop-types';
import './roomImages.css';
import { CONTACT_PAGE } from '../../routes';

const RoomImages = ({ rooms }) => (
  <div className="room-container">
    {Object.values(rooms).map(room => (
      <div className="room-wrapper" key={`room-${room.room_image}`}>
        <img className="room-image" src={room.room_image} alt="" />
        {room.button_text ? (
          <a className="book-button-room" href={CONTACT_PAGE}>
            {room.button_text}
          </a>
        ) : null}
        <div className="room-type">{room.room_title}</div>
        {room.room_subtitle ? (
          <div className="room-location">{room.room_subtitle}</div>
        ) : null}
      </div>
    ))}
  </div>
);

RoomImages.PropTypes = {
  rooms: PropTypes.object,
};

export default RoomImages;
