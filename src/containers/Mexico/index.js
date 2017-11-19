import React from 'react';
import '../../App.css';
import {
  Navigation,
  PageHeader,
  Divider,
  Footer,
  RoomImages,
  Location,
} from '../../components';
import roomPage from './constants';

const Mexico = () => (
  <div className="App">
    <Navigation />
    <PageHeader />
    <Divider />
    <RoomImages contents={roomPage} />
    <Divider />
    <Location />
    <Footer />
  </div>
);

export default Mexico;
