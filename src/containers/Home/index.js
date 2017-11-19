import React from 'react';
import '../../App.css';
import {
  Divider,
  Header,
  TitleSubtitle,
  Contents,
  RoomImages,
  FacilitiesList,
  CarouselImages,
  Banner,
  Tours,
} from '../../components';

const Home = () => (
  <div className="App">
    <Header />
    <TitleSubtitle />
    <Contents />
    <Divider />
    <TitleSubtitle />
    <RoomImages />
    <Divider />
    <TitleSubtitle />
    <Tours />
    <Divider />
    <TitleSubtitle />
    <FacilitiesList />
    <CarouselImages />
    <TitleSubtitle />
    <Banner />
  </div>
);

export default Home;
