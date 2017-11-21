import React from 'react';
import PropTypes from 'prop-types';
import './pageHeader.css';

const PageHeader = ({ pageHeaderContents }) => (
  <div className="page-header-container">
    <div
      className="page-header-wrapper"
      key={`pageheader${pageHeaderContents.src}`}
    >
      <img
        className="page-header-image"
        src={pageHeaderContents.banner_image}
        alt=""
      />
      <div className="page-header-text-main">
        {pageHeaderContents.banner_title}
      </div>
      <div className="page-header-text-sub">
        {pageHeaderContents.banner_subtitle}
      </div>
      <a
        className="book-button-page-header"
        href={pageHeaderContents.book_button.url}
      >
        {pageHeaderContents.book_button.title}
      </a>
    </div>
  </div>
);

PageHeader.PropTypes = {
  pageHeaderContents: PropTypes.object,
};

export default PageHeader;
