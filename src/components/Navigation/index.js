import React from 'react';
import { Link } from 'react-router-dom';
import { youtubeImage, facebookImage, callImage } from '../../images';

import './navigation.css';
import { ROOT } from '../../routes';

const Navigation = ({
  nav_items,
  nav_image,
  facebook_url,
  youtube_url,
  phone,
}) => (
  <div className="nav-container">
    <Link to={ROOT}>
      <img className="logo" src={nav_image} alt="Pause Hostels" />
    </Link>
    <div className="link-wrapper">
      <div className="contact-info">
        <div className="phone">
          <img className="phone-icon" src={callImage} alt="Contact" />
          <p>Contact us directly on {phone}</p>
        </div>
        <div>
          <a href={facebook_url}>
            <img className="social-icon" src={facebookImage} alt="Facebook" />
          </a>
          <a href={youtube_url}>
            <img className="social-icon" src={youtubeImage} alt="YouTube" />
          </a>
        </div>
      </div>
      <div className="nav-links">
        <ul>
          {nav_items.map(({ nav_item }, idx) => (
            <li key={`navitems-${idx}`}>
              <Link to={`/newsite${nav_item.url}`}>{nav_item.title}</Link>
            </li>
          ))}
        </ul>
      </div>
      <div className="contact-info-mobile">
        <div className="phone">
          <img className="phone-icon-mobile" src={callImage} alt="Contact" />
          <p>Call us: {phone}</p>
        </div>
      </div>
    </div>
  </div>
);

export default Navigation;
