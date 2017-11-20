import React from 'react';
import './navigation.css';
import { ROOT } from '../../routes';

const Navigation = ({
  navitem1_text,
  navitem2_text,
  navitem3_text,
  navitem4_text,
  navitem1_location,
  navitem2_location,
  navitem3_location,
  navitem4_location,
  nav_image,
  navitem_facebook,
  navitem_youtube,
  navitem_phone,
}) => (
  <div className="nav-container">
    <a href={ROOT}>
      <img className="logo" src={nav_image.url} alt={nav_image.alt} />
    </a>
    <div className="link-wrapper">
      <div className="contact-info">
        <div className="phone">
          <img className="phone-icon" src="/phone-icon.png" alt="Contact" />
          <p>Contact us directly at {navitem_phone}</p>
        </div>
        <div>
          <a href={navitem_facebook}>
            <img
              className="social-icon"
              src="/facebook-icon.png"
              alt="Facebook"
            />
          </a>
          <a href={navitem_youtube}>
            <img
              className="social-icon"
              src="/youtube-icon.png"
              alt="YouTube"
            />
          </a>
        </div>
      </div>
      <div className="nav-links">
        <ul>
          <li>
            <a href={navitem1_location}>{navitem1_text}</a>
          </li>
          <li>
            <a href={navitem2_location}>{navitem2_text}</a>
          </li>
          <li>
            <a href={navitem3_location}>{navitem3_text}</a>
          </li>
          <li>
            <a href={navitem4_location}>{navitem4_text}</a>
          </li>
        </ul>
      </div>
    </div>
  </div>
);

export default Navigation;
