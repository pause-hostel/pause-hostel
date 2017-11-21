import React from 'react';
import PropTypes from 'prop-types';
import {
  PageHeader,
  Divider,
  RoomImages,
  Location,
  TitleSubtitle,
  Contents,
  FacilitiesList,
  CarouselImages,
} from '../';

const HostelTemplate = ({
  welcome_content,
  hostel_banner,
  hostel_location,
  room_content,
  facilities,
  gallery,
}) => (
  <div className="App">
    <PageHeader contents={hostel_banner} />
    <TitleSubtitle
      titleText={welcome_content.welcome_title}
      subtitleText={welcome_content.welcome_subtitle}
    />
    <Contents contentText={welcome_content.welcome_paragraph} />
    <Divider />
    <RoomImages rooms={room_content.rooms} />
    <Divider />
    <TitleSubtitle
      titleText={facilities.facilities_title}
      subtitleText={facilities.facilities_subtitle}
    />
    <FacilitiesList facilityItems={facilities.facility_items} />
    <Divider />
    <Location {...hostel_location} />
    <Divider />
    <CarouselImages galleryImages={gallery} />
  </div>
);

HostelTemplate.propTypes = {
  welcome_content: PropTypes.object, //eslint-disable-line
  hostel_banner: PropTypes.object, //eslint-disable-line
  hostel_location: PropTypes.object, //eslint-disable-line
  room_content: PropTypes.object, //eslint-disable-line
  facilities: PropTypes.object, //eslint-disable-line
  gallery: PropTypes.array, //eslint-disable-line
};

HostelTemplate.defaultProps = {
  welcome_content: {},
  hostel_banner: {},
  hostel_location: {},
  room_content: {},
  facilities: {},
  gallery: {},
};

export default HostelTemplate;
