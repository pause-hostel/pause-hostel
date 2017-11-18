import React from 'react';
import './header.css';
import { CONTACT_PAGE } from '../../routes';
import { headerContents } from './constants';

const Header = ({ contents }) => {
  return (
    <div className=".header-container">
      {contents.map(content => (
        <div className="header-wrapper">
          <img className="header-image" src={content.src} alt="" />
          <h1 className="header-text">{content.headerText}</h1>
          <h3 className="header-text">{content.headerSub}</h3>
        </div>
      ))}
    </div>
  );
};

Header.defaultProps = {
  contents: headerContents
};

export default Header;
