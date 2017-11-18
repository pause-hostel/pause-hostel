import React, { Component } from 'react';
import '../../App.css';
import {
  Navigation,
  Footer,
  Divider,
  Header,
  TitleSubtitle
} from '../../components';

class Home extends Component {
  render() {
    return (
      <div className="App">
        <Navigation />
        <Header />
        <TitleSubtitle />
        <Divider />
        <Footer />
      </div>
    );
  }
}

export default Home;
