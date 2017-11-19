import React, { Component } from 'react';
import '../../App.css';
import { Navigation, PageHeader, Divider, Footer } from '../../components';

class Mexico extends Component {
  render() {
    return (
      <div className="App">
        <Navigation />
        <PageHeader />
        <Divider />
        <Footer />
      </div>
    );
  }
}

export default Mexico;
