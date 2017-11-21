import React from 'react';
import PropTypes from 'prop-types';
import './contents.css';

const Contents = ({ contentText }) => (
  <div
    key={`contents-${contentText}`}
    className="contents"
    dangerouslySetInnerHTML={{ __html: contentText }}
  />
);

Contents.PropTypes = {
  contentText: PropTypes.string,
};

export default Contents;
