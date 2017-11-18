import React from 'react';
import './navigation.css';
import { ROOT } from '../../routes';
import ListWrapper from '../List/ListWrapper';
import { navigationLinks } from './constants';

const Navigation = () => (
  <div className="nav-container">
    <a href={ROOT}>
      <img className="logo" src="/pause-logo.png" alt="Pause Hostels" />
    </a>
    <div className="link-wrapper">
      <div className="contact-info">
        <div className="phone">
          <img className="phone-icon" src="/phone-icon.png" alt="Contact" />
          <p>Contact us directly at +52 (988) 347 47 89 (Mexico)</p>
        </div>
        <div>
          <img
            className="social-icon"
            src="/facebook-icon.png"
            alt="Facebook"
          />
          <img className="social-icon" src="/youtube-icon.png" alt="YouTube" />
        </div>
      </div>
      <ul className="nav-links">
        <ListWrapper items={navigationLinks} />
      </ul>
    </div>
  </div>
);

export default Navigation;
