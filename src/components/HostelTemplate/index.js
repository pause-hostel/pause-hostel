import React from 'react';
import PropTypes from 'prop-types';
import LazyLoad from 'react-lazyload';

import {
  PageHeader,
  Divider,
  RoomImages,
  Location,
  TitleSubtitle,
  Contents,
  FacilitiesList,
  CarouselImages,
  ErrorBoundaryComponent,
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
    <ErrorBoundaryComponent>
      <PageHeader contents={hostel_banner} />
    </ErrorBoundaryComponent>
    <TitleSubtitle
      titleText={welcome_content.welcome_title}
      subtitleText={welcome_content.welcome_subtitle}
    />
    <Contents contentText={welcome_content.welcome_paragraph} />
    <Divider />
    <LazyLoad height={200} once>
      <TitleSubtitle
        titleText={room_content.room_section_title}
        subtitleText={room_content.room_section_subtitle}
      />
      <RoomImages rooms={room_content.rooms} />
    </LazyLoad>
    <Divider />
    <TitleSubtitle
      titleText={facilities.facilities_title}
      subtitleText={facilities.facilities_subtitle}
    />
    <ErrorBoundaryComponent>
      <FacilitiesList facilityItems={facilities.facility_items} />
    </ErrorBoundaryComponent>
    <Divider />
    <ErrorBoundaryComponent>
      <Location {...hostel_location} />
    </ErrorBoundaryComponent>
    <LazyLoad height={200} once offset={100}>
      <ErrorBoundaryComponent>
        <CarouselImages galleryImages={gallery} />
      </ErrorBoundaryComponent>
    </LazyLoad>
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
  gallery: [],
};

export default HostelTemplate;
