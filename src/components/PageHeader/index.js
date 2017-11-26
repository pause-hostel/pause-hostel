import React from 'react';
import { Link } from 'react-router-dom';
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
        <Link className="book-button-page-header" to={book_button.url}>
          {book_button.title}
        </Link>
      </div>
    </div>
  );
};

PageHeader.propTypes = {
  contents: PropTypes.object, //eslint-disable-line
};
PageHeader.defaultProps = {
  contents: {},
};

export default PageHeader;
