import React from 'react';
import '../../App.css';
import {
  Navigation,
  Footer,
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
    <Navigation />
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
    <Footer />
  </div>
);

export default Home;
