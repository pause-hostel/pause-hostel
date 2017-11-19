import React from 'react';
import './header.css';
import { CONTACT_PAGE } from '../../routes';
import headerContents from './constants';

const Header = ({ contents }) => (
  <div className="header-container">
    {contents.map(content => (
      <div className="header-wrapper" key={`header-${content.src}`}>
        <img className="header-image" src={content.src} alt="" />
        <div className="header-text-main">{content.headerText}</div>
        <div className="header-text-sub">{content.headerSub}</div>
        <a className="book-button-header" href={CONTACT_PAGE}>
          Book Now
        </a>
      </div>
    ))}
  </div>
);

Header.defaultProps = {
  contents: headerContents,
};

export default Header;
