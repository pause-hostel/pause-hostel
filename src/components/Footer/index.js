import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import './footer.css';
import { ROOT } from '../../routes';
import { youtubeImage, facebookImage, callImage } from '../../images';

const Footer = ({
  nav_items,
  nav_image,
  facebook_url,
  youtube_url,
  phone,
  book_button,
}) => (
  <div className="footer">
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
          <Link className="book-button" to={book_button.url}>
            {book_button.title}
          </Link>
        </div>
        <div className="nav-links">
          <ul>
            {nav_items.map(({ nav_item }, idx) => (
              <li key={`navitems-${idx}`}>
                <Link to={nav_item.url}>{nav_item.title}</Link>
              </li>
            ))}
          </ul>
        </div>
        <Link className="book-button-mobile" to={book_button.url}>
          {book_button.title}
        </Link>
        <div className="contact-info-mobile">
          <div className="phone">
            <img className="phone-icon-mobile" src={callImage} alt="Contact" />
            <p>Call us: {phone}</p>
          </div>
        </div>
      </div>
    </div>
    <div className="legal">
      Pause Hostels/Mexico/Belize/All Rights Reserved 2017
    </div>
    <div className="credits">
      <p>
        Site made with &hearts; by
        <a href="https://github.com/stephanieinez"> Steph</a> &
        <a href="https://github.com/grady-lad"> Martin</a>
      </p>
    </div>
  </div>
);
Footer.propTypes = {
  nav_items: PropTypes.array, //eslint-disable-line
  nav_image: PropTypes.string,
  facebook_url: PropTypes.string,
  youtube_url: PropTypes.string,
  phone: PropTypes.string,
  book_button: PropTypes.object, //eslint-disable-line
};
Footer.defaultProps = {
  nav_items: [],
  facebook_url: '',
  youtube_url: '',
  phone: '',
  nav_image: '',
  book_button: {},
};
export default Footer;
