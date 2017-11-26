import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import './header.css';

const Header = ({ contents }) => (
  <div className="header-container">
    {Object.keys(contents).map((content) => {
      const {
        hostel_image,
        image_location,
        image_text,
        book_button,
      } = contents[content];
      return (
        <div
          className="header-wrapper"
          key={`header-${image_text.image_title}`}
        >
          <Link to={image_location}>
            <div
              className="header-image"
              style={{ backgroundImage: `url(${hostel_image})` }}
              alt=""
            />
          </Link>
          <div className="header-text-main">{image_text.image_title}</div>
          <div className="header-text-sub">{image_text.image_subtitle}</div>
          <a className="book-button-header" href={book_button.url}>
            {book_button.title}
          </a>
        </div>
      );
    })}
  </div>
);

Header.propTypes = {
  contents: PropTypes.object, //eslint-disable-line
};
Header.defaultProps = {
  contents: {}, //eslint-disable-line
};

export default Header;
