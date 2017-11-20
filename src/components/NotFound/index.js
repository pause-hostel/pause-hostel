import React from 'react';
import './notFound.css';
import { ROOT } from '../../routes';

const NotFound = () => (
  <div className="notfound-container">
    <img className="notfound-image" src="/guilty-dog.jpg" alt="Loading" />
    <div className="notfound-text">
      Sorry, looks like the dog ate this page!
    </div>
    <a className="notfound-link" href={ROOT}>
      Click here to go back home.
    </a>
  </div>
);

export default NotFound;
