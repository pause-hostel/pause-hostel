import React from 'react';
import PropTypes from 'prop-types';
import './contents.css';

const Contents = ({ contentText }) => (
  <div
    key={`contents-${contentText}`}
    className="contents"
    dangerouslySetInnerHTML={{ __html: contentText }} //eslint-disable-line
  />
);

Contents.propTypes = {
  contentText: PropTypes.string,
};
Contents.defaultProps = {
  contentText: '', //eslint-disable-line
};

export default Contents;
