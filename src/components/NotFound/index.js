import React from 'react';
import { Link } from 'react-router-dom';
import './notFound.css';
import { ROOT } from '../../routes';

const NotFound = () => (
  <div className="notfound-container">
    <img className="notfound-image" src="/guilty-dog.jpg" alt="Loading" />
    <div className="notfound-text">
      Sorry, looks like the dog ate this page!
    </div>
    <Link className="notfound-link" to={ROOT}>
      Click here to go back home
    </Link>
  </div>
);

export default NotFound;
