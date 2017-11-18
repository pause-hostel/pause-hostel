import React, { Component } from 'react';
import '../../App.css';
import { Navigation, Footer } from '../../components';

class Home extends Component {
  render() {
    return (
      <div className="App">
        <Navigation />
        <h1 className="App-title">Home</h1>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <Footer />
      </div>
    );
  }
}

export default Home;
