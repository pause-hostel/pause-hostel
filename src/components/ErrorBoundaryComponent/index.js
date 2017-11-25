import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './errorBoundaryComponent.css';

const ErrorBoundaryComponentRender = () => (
  <div className="error-block-component">
    <p>Oh no! This section failed to load. Please check back later.</p>
  </div>
);

class ErrorBoundaryComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hasError: false,
    };
  }
  componentDidCatch(error) {
    console.error(error);
    this.setState({
      hasError: true,
    });
  }
  render() {
    if (this.state.hasError) {
      return <ErrorBoundaryComponentRender />;
    }
    return this.props.children;
  }
}

export default ErrorBoundaryComponent;
ErrorBoundaryComponent.propTypes = {
  children: PropTypes.node.isRequired,
};
