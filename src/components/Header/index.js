import React from 'react';
import './header.css';
import headerContents from './constants';

const Header = ({ contents }) => (
  <div className="header-container">
    {Object.values(contents).map((content, idx) => {
      const { hostel_image, image_location, image_text, book_button } = content;
      return (
        <div className="header-wrapper" key={`header-${idx}`}>
          <a href={image_location}>
            <img className="header-image" src={hostel_image} alt="" />
          </a>
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

Header.defaultProps = {
  contents: headerContents,
};

export default Header;
