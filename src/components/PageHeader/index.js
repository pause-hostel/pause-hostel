import React from 'react';
import PropTypes from 'prop-types';

import './pageHeader.css';

const PageHeader = ({ contents }) => {
  const { title, subtitle, hostel_image, book_button } = contents;
  return (
    <div className="page-header-container">
      <div className="page-header-wrapper" key={`pageheader${hostel_image}`}>
        <div
          className="page-header-image"
          style={{ backgroundImage: `url(${hostel_image})` }}
          alt=""
        />{' '}
        <div className="page-header-text-main">{title}</div>
        <div className="page-header-text-sub">{subtitle}</div>
        <a className="book-button-page-header" href={book_button.url}>
          {book_button.title}
        </a>
      </div>
    </div>
  );
};

PageHeader.PropTypes = {
  pageHeaderContents: PropTypes.object,
};

export default PageHeader;
