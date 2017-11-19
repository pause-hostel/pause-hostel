import React from 'react';
import './pageHeader.css';
import pageHeaderContents from './constants';
import { CONTACT_PAGE } from '../../routes';

const PageHeader = ({ contents }) => (
  <div className="page-header-container">
    {contents.map(content => (
      <div className="page-header-wrapper" key={`pageheader${content.src}`}>
        <img className="page-header-image" src={content.src} alt="" />
        <div className="page-header-text-main">{content.pageHeaderText}</div>
        <div className="page-header-text-sub">{content.pageHeaderSub}</div>
        <a className="book-button-page-header" href={CONTACT_PAGE}>
          Book Now
        </a>
      </div>
    ))}
  </div>
);

PageHeader.defaultProps = {
  contents: pageHeaderContents,
};

export default PageHeader;
