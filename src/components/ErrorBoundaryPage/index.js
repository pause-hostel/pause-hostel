import React, { Component } from 'react';
import './errorBoundaryPage.css';

const ErrorBoundaryPageRender = () => (
  <div className="error-block">
    <p>
      Oh no, what a CAT-astrophe! Seems like something went wrong, but we're
      working hard to fix it! <br />
    </p>
    <img
      className="error-image"
      src="https://images.baxterboo.com/global/images/products/large/construction-worker-halloween-dog-costume-1.jpg"
      alt=""
    />
    <p>
      In the meantime, you can email us at{' '}
      <a href="mailto:pausehostel.mc@gmail.com">pausehostel.mc@gmail.com</a>
    </p>
  </div>
);

class ErrorBoundaryPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hasError: false,
    };
  }
  componentDidCatch(error, info) {
    this.setState({
      hasError: true,
    });
  }
  render() {
    if (this.state.hasError) {
      return <ErrorBoundaryPageRender />;
    }
    return this.props.children;
  }
}

export default ErrorBoundaryPage;
